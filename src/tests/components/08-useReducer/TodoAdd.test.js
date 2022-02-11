import {shallow} from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en <TodoAdd/> ', () => { 

    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('Debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('No debe de llamar handleAddTodo', () => { 
         const formSubmit = wrapper.find('form').prop('onSubmit');

         formSubmit({ preventDefault(){} });
         
        expect(handleAddTodo).toHaveBeenCalledTimes(0); 
      });

      test('Debe de llamar la función handleAddTodo', () => { 

        const value = 'Aprender React';
        wrapper.find('input').simulate('change',{ 
            target: {
                //value: value
                value,
                name: 'description'
            }  
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });
        
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith( expect.any(Object) ); //Esto esperaria que mande cualquier objeto incluso un objeto vacio y no sería lo correcto
        //Para probar la función y sus argumentos
        //como el id cambia cada segundo con el expect.any(Number) le estamos diciendo 
        //que espere cualquier cosas siempre y cuando sea un número
        expect(handleAddTodo).toHaveBeenCalledWith( {
              id: expect.any(Number),
              desc: value,
              done: false
        } );
        
        expect(wrapper.find('input').prop('value')).toBe('');  
       })
 })