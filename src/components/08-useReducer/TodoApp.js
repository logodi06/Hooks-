import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';


// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
//    return [ {
//         id: new Date().getTime(),
//         desc: 'Aprender React',
//         done: false
//    }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //El campo reducer, tiene que ser la función
    //El initialState es un estado inicial, que se puede mandar
    //init función utilizada para iniciar el state
    //const [state, dispatch] = useReducer(reducer, initialState, init);

    //el dispatch es una función al cual se le manda una acción y este ya va 
    //a saber a que reducer es al hay que mandar la información y cuando cambie el state
    //va a redibujar lo que cambie
    //const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    //función init, le ayuda a react a computar todo el estado inicial para que funcione mas rapido
    //el componente y esa función no se este ejecutando y ejecutando cada que hay cambios
    //console.log(todos);

    //El init lo que sea que retorne es el initialState 
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //Aquí se corto el useForm para pasarlo al TodoAdd

    //console.log(description);

    //El localStorage se debe usar cuando los TODOS cambian
    //Si el todo cambia ahí se quiere grabar el localStorage, el localStorage solo guarda String
    //con el JSON.stringify convertimos a string
    //el efecto se va a encargar de guardar en el localstorage cualquier cambio que suceda en los 
    //todos ya sea add, edit, delet
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
     
    //Función que al dar click al boton de borrar se ejecute esta función
    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
        //console.log('borrar');
    }

    const handleToggle = (todoId) => {
        // const action = {
        //     type: 'toggle',
        //     payload: todoId
        // }

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo    
        });
    }
    
    //La función handleSubmit esta en TodoAdd

  return (<div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

    <div className='row'>
        <div className='col-7'> 
          <TodoList todos={todos} handleToggle={handleToggle} handleDelete={handleDelete}/>
        </div>
        <div className='col-5' >
           <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
    </div>
  </div>);
};
