import { act } from '@testing-library/react';
import {shallow, mount} from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Prueba en <TodoApp/>', () => { 
    
    const wrapper = shallow(<TodoApp />);

    //Mock de localStorage
    //Solo sehace que el setItem se haya llamado
    Storage.prototype.setItem = jest.fn(() => {} );

    test('Debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de agregar un TODO', () => { 
         const wrapper = mount(<TodoApp />);

         act(() => {
             wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);  
             wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);  

         });

         expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
         expect(localStorage.setItem).toHaveBeenCalledTimes(2);
      });

      test('Debe de eliminar un TODO', () => { 
          wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
          wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

          expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
        });

 
 })