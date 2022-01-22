import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }
    //EL useCallBack regresa una  función
    //El use callback se utiliza cuando se requiere enviar una función
    //ShowIncrement a este componente se le manda una función
    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter]);
    
    //Si el useEffect tiene de dependencia una función, también se debe 
    //de utilizar el useCallBack, de esta manera la función no esta cambiando
    useEffect( () => {

    }, [increment]);

  return (<div>
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment} />
  </div>);
};
