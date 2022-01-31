import { todoReducer } from "../../../components/08-useReducer/todoReducer";

const demoTodos  = [{
        id: 1,
        desc: 'Aprender React',
        done: false
    },
    {
        id: 2,
        desc: 'Aprender angular',
        done: false
    }]

describe('Pruebas en todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
       const state = todoReducer(demoTodos, {});

       expect(state).toEqual(demoTodos);
    });
    
});
