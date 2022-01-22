import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import { Small } from './Small';
import '../02-useEffect/effects.css';


export const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

  return (<div>
        {/* En el small se aplica el memo, porque al dar click en el botton
        show se vuelve a renderizar el small aunque este no tenga nada que ver
        con el componente pero como detecta que cambio lo renderiza, y el memo es 
        para evitar que se renderize algo que no cambia*/}
        <h1>Counter: <Small value={counter} /></h1>
        <hr/>

        <button className='btn btn-primary' onClick={increment}>
            +1
        </button>

        <button className='btn btn-primary ms-3' onClick={() => {
            setShow (!show);
        }}>Show/Hide {JSON.stringify(show)}</button>
  </div>);
};
