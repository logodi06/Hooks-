import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';



export const FormWithCustomHook = () => {
    //Es mala práctica y no se deben utilizar hooks de manera
    //condicional o que se renderizen de manera condicional
    //y deben estar lo más arriba posible del componente
  //Con el useFor utilizamos el hook que se creo, este hook está 
    //regresando los valores de name, email, password y el handleInputChange
    const [formValues, handleInputChange] = useForm( {
      name: '',
      email: '',
      password: ''
    });
    
    const {name, email, password} = formValues;

    //useEffect es un hook queq permite ejecutar algún efecto 
    //secundario cuando algo sucede en los componentes
   

    useEffect( () => {
        console.log('email cambió');
    }, [email]); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

  return (
  <form onSubmit={ handleSubmit }>
    <h1>FormWithCustomHook</h1>
    <hr />
    <div className='form-group'>
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="Tu nombre"
        autoComplete="off"
        value={ name }
        onChange={ handleInputChange }
      />
    </div>

    <div className='form-group mt-3'>
      <input
        type="text"
        name="email"
        className="form-control"
        placeholder="email@gmail.com"
        autoComplete="off"
        value={ email }
        onChange={ handleInputChange }
      />
    </div>

    <div className='form-group mt-3'>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="***"
        value={ password }
        onChange={ handleInputChange }
      />
    </div>
    {/* Si el name existe debe de mostrar el mensaje*/}
    <button type="submit" className="btn btn-success">Enviar</button>
  </form>);
};
