import {shallow} from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';

import { useFetch } from '../../../hooks/useFetch';

//Lo que hace esto es que cuando se vaya a utilizar en este archivo.
//en lugar de usar useFetch va a utilizar una implemtación que se inventa abajo.
jest.mock('../../../hooks/useFetch');

jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks7>', () => {

  //Simular como si el useCounter regresara la respuesta.
  //Como el valor del counter no va a cambiar, no va a ser manipulado
  //se puede declarara hasta aquí arriba
  beforeEach( () =>  {
 
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

});

  test('Debe de mostrarse correctamente el componente', () => {

    //con solo hacer el mock, ya evita las llamas al useFetch
    //cuando se llame el  useFetch.mockReturnValue va a regrear
    //lo que haría cuando se cargue por primera vez el componente.
    //Lo que esto hace es simular la respuesta del useFetch, como si fuera el valor al inicio.
    useFetch.mockReturnValue( {
      data: null,
      loading: true,
      error: null
    });

     const wrapper = shallow(<MultipleCustomHooks/>);
     expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar la información', () => {

    //Componente useFecth(). Necesito decir a Jest que no 
    //interesa lo que suceda en el useFetch, solo nos interesa la
    //información que va a retornar, para hay que pasarlo por un mock. Las pruebas del useFetch solo ya se hicieron
    
    //Aquí se hace la simulación de una respuesta obtenida en la petición http
    useFetch.mockReturnValue( {
      data: [{
        author: 'Lorena',
        quote: 'Hola Mundo',
      }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks/>);
    //Para ver si funcionaron los cambios, con el arreglo de respuesta
    //se impreme en cosola el html del wrapper.
    //console.log(wrapper.html());

    // Manera de hacer busquedas en el wrapper
    //La clase .alert no debe de existir si es que se tiene información de la petición
    //No deberia de existir
    expect(wrapper.find('.alert').exists()).toBe(false);

    //En el wrapper busca el elemtno html (<p>) y toma el texto 
    //de lo que contiene y solo se hace la comparación como el toBe
    expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');

    expect(wrapper.find('footer').text().trim()).toBe('Lorena');



  });
  
  
});
