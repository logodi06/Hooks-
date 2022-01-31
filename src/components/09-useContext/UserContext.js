import {createContext} from 'react';

//Va a exportar un componente, por eso el nombre tiene sintaxis de componente

//Esto crea un contex, todo lo que se defina aquí se podrá usar en 
//todos sus hijos
export const UserContext = createContext(null);