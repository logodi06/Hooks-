
//Tenemos un estado inicial, que es un arreglo de TODOs
const initialState = [{
    id: 1,
    todo: 'Compran pan',
    done: false
}];


//Luego Se define un Reducer que es una función que recibe 2 elementos
//1. State: si no recibe ningún argumento sería igual al initialState
//2. Tambien recibe la acción, la acción es quien va a modificar el State 
// Esta función tiene que resolver todo con lo que tiene, no debe llamar a nada secundario fuera de ella
//Siempre regresa un nuevo estado
const todoReducer = (state = initialState, action) => {
    
    //El signo (?) es una condición que dice que si la acción tiene algún 
    //valor entonces lee el tipo, si no, que no haga nada
    if(action.type === 'agregar'){
        return [...state, action.payLoad];
    }
    return state;
}

//Regresa el listado de los Todos
let todos = todoReducer();

//Nuevo objeto que se requeire agregar
const newTodo =  {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

//Definir la acción para poder enviarlo en la función de todoReducer()
// Se debe definir una acción para mandarla al reducer
const agregarTodoAction = {
    type: 'agregar',
    //payLoad, es un estandar de que se llame así porque otros desarrollados
    //así pueden saber que los argumentos que se mandan en la acción va en el payLoad 
    payLoad: newTodo
}


//Para enviar la nueva tarea, se debe crear una accion, definida arriba
//para saber que es lo que se va a evaluar
todos = todoReducer( todos, agregarTodoAction);

console.log(todos);