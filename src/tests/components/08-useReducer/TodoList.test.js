import { TodoList } from "../../../components/08-useReducer/TodoList";
import {shallow} from 'enzyme';
import { demoTodos } from "../../fixtures/demoTodos";


describe('Prueba en <TodoList />', () => { 
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete= {handleDelete}
            handleToggle= {handleToggle}
        />);

    test('Debe de mostrarse correctatamente', () => { 
      expect(wrapper).toMatchSnapshot();
     });

     test('Debe de tener dos <TodoListItem />', () => { 
         //console.log(wrapper.html());
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        
        //con el .props podemos ver sus atributos
        //console.log(wrapper.find('TodoListItem').at(0).props());
        
        // con el prop handleDelete.toEqual(expect.any(Function)) espera cualquier función
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
      })

 });