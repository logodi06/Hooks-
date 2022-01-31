import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

//Pruebas con el uso de useForm
describe('Pruebas en useForm', () => {
  const initialForm = {
      name: 'Lorena',
      email: 'lore@gmail.com'
  };

  test('Debe de regresar un formulario por defecto', () => {
    
    const {result} = renderHook(() => useForm(initialForm));

    //Como el result regresa un arreglo, se utiliza la desesctructuración de arreglos
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');


  });

  test('Debe de cambiar el valor del formulario (cambiar name)', () => {
       const { result } = renderHook( () => useForm(initialForm));
       //Se hace desestructuración de arreglos, como es un arreglo el orden del retorno
       //si importa, y como aún no se necesita el value,  se coloca una coma, y se escribe el siguiente
       //retorno
       const [ , handleInputChange] = result.current;

        act(() => {
          //El handleInputChange recibe un evento, y dentro debe de tener el 
          //target y los valores del input
          handleInputChange( {
            target: {
              name: 'name',
              value: 'Soledad'
            }
          });
       });

       const [ formValues ] = result.current;
       //Se utiliza el operador spred, para decirle que regrese todo lo anterior
       //que tenga junto con los valores pero que solo cambie la propiedad de name
       expect(formValues).toEqual( {...initialForm, name: 'Soledad'});
  });


  test('Debe de re-establecer el formulario con RESET', () => {
    const { result } = renderHook( () => useForm(initialForm));
    const [ , handleInputChange, reset] = result.current;

     act(() => {
       handleInputChange( {
         target: {
           name: 'name',
           value: 'Soledad'
         }
       });
       reset();
    });

    const [ formValues ] = result.current;
    expect(formValues).toEqual(initialForm);
  });
  
  
  
});
