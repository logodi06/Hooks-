import React, { useState } from 'react';
import {MultipleCustomHooks} from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css'

export const RealExampleRef = () => {
  //Se crea para poder tener la condición para el MultipleCustomHooks
  const [show, setshow] = useState(false);
  
  return (<div>
      <h1>Real ExampleRef</h1>
      <hr />
      {/* El show tiene un valor booleno, si está en true muestra el MultipleCustomHooks   */}
      { show && <MultipleCustomHooks />}
      <button className='btn btn-primary mt-5' onClick={ () => {
        setshow(!show); 
      }}>Show/Hide</button>
  </div>);
};
