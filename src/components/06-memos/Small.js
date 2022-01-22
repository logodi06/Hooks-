import React, {memo} from 'react';

//Memo: Memorizar
//Memo: Función que va a regresar la forma memorizada del componente
//Solo se va a disiparar si las props (propierties) cambian en caso contrario
//va usar la  versión memorizada cuando tenga que renderizar algo
export const Small = React.memo (({value }) => {
    console.log('Me volví a llamar');
  return (<small>{value}</small>);
}
)