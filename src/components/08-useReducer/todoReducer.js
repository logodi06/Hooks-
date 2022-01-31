
export const todoReducer = (state = [], action) => {
    switch (action.type) {
         case 'add':
            return [...state,action.payload];

        case 'delete':
            //el filter va a regresar un nuevo arreglo que cumplan la condicion.
            //En este caso va a regresar un nuevo arreglo con los objetos cuyo id
            //es diferente al que se quiere eliminar, osea sin el que se quiere eliminar
            return state.filter( todo => todo.id != action.payload);

        case 'toggle': 
            return state.map( todo => 
                 (todo.id === action.payload) 
                    ? { ...todo, done: !todo.done }
                    : todo
            );

        case 'toggle-old':
            return state.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else {
                    return todo;
                }
            });

        default:
            return state;
    }
}