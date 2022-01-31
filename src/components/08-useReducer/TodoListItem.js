import React from 'react';

export const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    //console.log(todo);
  return (
    <li className='list-group-item'  
        key = { todo.id }>
        <p onClick={() => 
            handleToggle(todo.id)} 
            className={`${todo.done && 'complete'}`}>
                 {index +1}. {todo.desc}</p>
        <button onClick={() => 
            {handleDelete(todo.id)}} 
            className='btn btn-danger'>Borrar</button>
    </li>
  );
};
