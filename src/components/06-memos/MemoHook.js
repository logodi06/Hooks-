import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import {useCounter} from '../../hooks/useCounter';

import '../02-useEffect/effects.css';


export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    

    //UseMemo recibe una función, que se conocería como un callback
    //Tambien recibe un input que son las dependencias, es decir que si algo 
    //cambia quiero memorizar el nuevo resultado 
   const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (<div>
      <h1>MemoHook</h1>
        {/* En el small se aplica el memo, porque al dar click en el botton
        show se vuelve a renderizar el small aunque este no tenga nada que ver
        con el componente pero como detecta que cambio lo renderiza, y el memo es 
        para evitar que se renderize algo que no cambia*/}
        <h3>Counter:<small> { counter }</small></h3>
        <hr/>
        <p>{memoProcesoPesado}</p>
        <button className='btn btn-primary' onClick={increment}>
            +1
        </button>

        <button className='btn btn-primary ms-3' onClick={() => {
            setShow (!show);
        }}>Show/Hide {JSON.stringify(show)}</button>
  </div>);
};
