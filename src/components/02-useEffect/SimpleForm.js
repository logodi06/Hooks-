import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {
    //Es mala práctica y no se deben utilizar hooks de manera
    //condicional o que se renderizen de manera condicional
    //y deben estar lo más arriba posible del componente
    const [formState, setformState] = useState( {
      name: '',
      email: ''
    });
    
    const {name, email} = formState;

    //useEffect es un hook queq permite ejecutar algún efecto 
    //secundario cuando algo sucede en los componentes
    useEffect ( () => {
        //console.log('hey');
        
    }, [] );

    useEffect ( () => {
      //console.log('El formState cambio');
      
    }, [formState] );

      useEffect ( () => {
        //console.log('El email cambio');
        
    }, [email] );

    const handleInputChange = ({target}) => {
      //console.log(e.target.name);
      //console.log(target.name);
     setformState( {
       ...formState,
       //Con el [target.name] se esta renombrado el valor para que ahora se name con el valor del value
         [target.name]: target.value
     });

    }
    

  return (
  <>
    <h1>useEffect</h1>
    <hr />
    <div className='form-group'>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu nombre"
        autoComplete="off"
        value={name}
        onChange={handleInputChange}
      />
    </div>

    <div className='form-group'>
      <input
        type="text"
        name="email"
        className="form-control"
        placeholder="email@gmail.com"
        autoComplete="off"
        value={email}
        onChange={handleInputChange}
      />
    </div>

    {/* Si el name existe debe de mostrar el mensaje*/}
   { (name === 'lorena') && <Message / >}
  </>);
};
