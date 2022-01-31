import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';


export const MainApp = () => {

   const [user, setUser] = useState({});

  return(
    //   Todo lo que se defina en el </UserContext> va a estar definido para todos sus hijos
    // Sus hijos es todo aquello que este dentro de el
    <UserContext.Provider value={{
        // user: user,
        // setUser: setUser
        //Esto es lo mismo que arriba pero de la forma corta
        user,
        setUser
    }}>
        <AppRouter />
    </UserContext.Provider>
  )
};
