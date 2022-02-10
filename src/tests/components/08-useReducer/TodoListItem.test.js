import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import {shallow} from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en <TodoListItem>', () => {
    
    //Simular y crear las funciones
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
        todo={demoTodos[0]}
        index={0}
        handleToggle={handleToggle}
        handleDelete = {handleDelete}
        />);
    
    test('Debe de mostrarse correctamente <TodoListItem />', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la función handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
        
    });

    test('Debe de llamar la funcion handleToggle', () => {
      wrapper.find('p').simulate('click');
      expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(`1. ${demoTodos[0].desc}`)
        
    });
    
    test('Debe de tener la clase complete si el TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true; 

        const wrapper = shallow(<TodoListItem 
            todo={ todo }
        />);

        //console.log(wrapper.html());

        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    });
    
  
});
