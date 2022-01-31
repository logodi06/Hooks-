import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
  return (
    <Router>
        <div>
            {/* Se crea una lista con las páginas a las que se puede navegar como menú */}
            <NavBar />
            <div className='container '>
            {/* Definición de rutas */}
                <Routes>
                    {/* Con el exact le decimos que la ruta debe ser examente como se degine */}
                    <Route exact path="/" element = {<HomeScreen />} />
                    <Route exact path="/about" element = {<AboutScreen />} />
                    <Route exact path="/login" element = {<LoginScreen />} />
                    <Route exact path="/login" element = {<LoginScreen />} />
                    {/* Ruta para que se redireccione cuando se coloque un path que no este definido */}
                    <Route path="*" element={<Navigate to ="/" />}/>
                

                </Routes>
            </div>
        </div>
    </Router>
  )
};
