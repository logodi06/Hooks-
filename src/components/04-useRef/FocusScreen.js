import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    //Focus input, que automáticamente ilumine el input
    //o en este caso de select que se posicione en ese input
    const handleClick = () => {
        inputRef.current.select();
    }

  return (
  <div>
      <h1>Focus Screen</h1>
      <hr/>

      <input 
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre" />

        <button className="btn btn-outline-primary mt-4"
        onClick={handleClick}> Focus </button>
  </div>
  )
};
