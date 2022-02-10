import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
       const state = todoReducer(demoTodos, {});

       expect(state).toEqual(demoTodos);
    });
    
    test('Debe de agregar un TODO', () => {
        //creamos el objeto del nuevo TODO
        const newTODO = {
            id: 3,
            desc: 'Aprender TypeScript',
            done: false
        };
        
        //se crea la action y lo que se requiere agregar a la accion
        const action = {
                type: 'add',
                payload: newTODO
        };

        //al todoReducer le mandamos el arreglo con los demosTodos que se tiene, y la acción de lo que 
        //se requiere hacer, en este caso ya va el nuevo TODO a agregar
        const state = todoReducer(demoTodos, action);
        //console.log(state);
        expect(state.length).toBe(3);

        //EL state ya trae los arreglos con los 3 objetos,y se compara con el equals
        //[...demoTodos] son los objetos que ya se tienen, y el newTodo es el nuevo objeto que se esta agregando
        expect(state).toEqual([...demoTodos, newTODO ]);
        // expect(state).toEqual( [
        //     {
        //         id: 1,
        //         desc: 'Aprender React',
        //         done: false
        //     },
        //     {
        //         id: 2,
        //         desc: 'Aprender angular',
        //         done: false
        //     },
        //     {
        //         id: 3,
        //         desc: 'Aprender TypeScript',
        //         done: false
        //     }
        // ] );
    });

    test('Debe de borrar un TODO', () => {

      const id = 1;

      const action = {
          type: 'delete',
          payload: id
      };

      const state = todoReducer(demoTodos,action);
      //console.log(state);

      expect(state.length).toBe(1);      
      //demoTodos[1] solo toma los del arreglo en la posición 1
      expect(state).toEqual([demoTodos[1]]);
    });

    test('Debe de hacer el TOGGLE del TODO', () => {

      const id = 1;
      const action = {
          type: 'toggle',
          payload: id
      };

      const state = todoReducer(demoTodos, action);
      console.log(state);
      
      //Se esperaria que el elemento en la posición 0 en el campo done este en true
      expect(state[0].done).toBe(true);
      expect(state[1]).toEqual(demoTodos[1] );


    });
    
    
});
