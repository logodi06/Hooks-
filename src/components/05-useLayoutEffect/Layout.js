
import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
    
    //la data que se recibe por primera vez es null

    //Doble negación (!!), se utiliz para transformar un null en un falso
    //Ejemplo:negación de null (!null) por lo tanto true.
    // (!!null) -> false
    //Condición lógica-> (!!) si la data tiene valor, (&&) entonces que regrese el objeto, por ejemp. "hola mundo"
    //Solo se ejecuta si data tiene valor, si no regresa falso y no hace nada
    const { quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    //Se puede utilizar para sacar mediciones  de algo despues de que el component
    //ya se haya renderizando o despues de que algo cambie
    //
    useLayoutEffect( () => {
        setBoxSize(pTag.current.getBoundingClientRect());
        console.log(pTag.current.getBoundingClientRect());
    },[quote]);

  return (
  <div>
      <h1>LayoutEffect!!! </h1>
      <hr />
        {/* Operación condicional ternario */}
     
                <blockquote className="blockquote text-end">
                    <p ref={pTag }>  {quote} </p>
                   
                </blockquote>
          
    <pre>{JSON.stringify(boxSize,null, 3)}
    </pre>
      <button 
        className="btn btn-primary" 
        onClick={increment} >
          Siguiente quote
      </button>


  </div>)
};
