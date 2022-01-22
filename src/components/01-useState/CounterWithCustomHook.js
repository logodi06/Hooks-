import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';


export const CounterWithCustomHook = () => {

    //Se creo el hook de useCounter en los hooks
    //Al usar el hook "useCounter",podemos destructurar
    //lo que regresa por cada cosa que regresa
  const { state, increment, decrement, reset} = useCounter( 100 );  

  return (
  <>
    <h1>Counter with hook: { state } </h1>
    <hr />

    <button onClick={ () => increment(2) } className='btn btn-primary'>+1</button>
    <button onClick={ () => reset() } className='btn btn-success' >Reset </button>
    <button onClick={ () => decrement(2) } className='btn btn-primary'>-1</button>

  </>);
};
