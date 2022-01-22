import React, { useState } from 'react';

export const useForm = (initialState = {}) => {
     const [values, setvalues] = useState(initialState);

     //recibe el evento
     //const handleInputChange = (e) => {}
     //del evento que recibe extrae solo el target
     const handleInputChange = ({target}) => {
        //console.log(e.target.name);
        //console.log(target.name);
        setvalues( {
         ...values,
         //Con el [target.name] se esta renombrado el valor para que ahora se name con el valor del value
           [target.name]: target.value
       });
  
      }
    
      return [values, handleInputChange];
};
