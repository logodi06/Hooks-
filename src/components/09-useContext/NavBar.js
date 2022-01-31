import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    // <nav>
    //     <ul>
    //         <li>
    //             <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //             <Link to="./about">About</Link>       
    //         </li>
    //         <li> 
    //             <Link to="./login">Login</Link>
    //         </li>
    //     </ul>
    // </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">useContext</Link>
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                    <Link to="/about" className="nav-link" >About</Link>
                    <Link to="/login" className="nav-link" >Login</Link> */}

                    {/* El link y NavLink son iguales y hacen lo mismo, solo que
                    el Navlink permite identificar que componente se está seleccionando
                    y esta activa el "active" automaticamente */}
                    <NavLink  to="/" className="nav-link" aria-current="page" >Home</NavLink>
                    <NavLink  to="/about" className="nav-link" >About</NavLink>
                    <NavLink  to="/login" className="nav-link" >Login</NavLink>
                </div>
             </div>
        </div>
    </nav>
    );
};
