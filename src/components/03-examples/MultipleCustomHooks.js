
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
    
    //la data que se recibe por primera vez es null

    //Doble negación (!!), se utiliz para transformar un null en un falso
    //Ejemplo:negación de null (!null) por lo tanto true.
    // (!!null) -> false
    //Condición lógica-> (!!) si la data tiene valor, (&&) entonces que regrese el objeto, por ejemp. "hola mundo"
    //Solo se ejecuta si data tiene valor, si no regresa falso y no hace nada
    const {author, quote} = !!data && data[0];
    
  return (
  <div>
      <h1>BreakingBad Quotes!!! </h1>
      <hr />
        {/* Operación condicional ternario */}
      {
          loading 
          ?
            (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
          :
          (
                <blockquote className="blockquote text-end">
                    <p> {quote} </p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
          )
      }

      <button 
        className="btn btn-primary" 
        onClick={increment} >
          Siguiente quote
      </button>


  </div>)
};
