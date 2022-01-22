import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0});

    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {
                //console.log(e);
      
              const coors = {x: e.x, y:e.y};
              setcoords(coors);
              //   console.log(coors);
              console.log('=D'); 
            }
        

      window.addEventListener('mousemove', mouseMove);
    
      return () => {
        window.removeEventListener('moumove',mouseMove);
    };
    }, []);
    

  return <div>
      <h3>Eres genial</h3>
      <p>x: {x}, y:{y}</p>
      

  </div>;
};
