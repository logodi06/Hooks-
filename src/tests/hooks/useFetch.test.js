import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe('Pruebas en useFetch', () => {
  test('Debe de retornar la información por defecto', () => {
    const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

    //Desestrucuturar lo que viene del result
    const {data, loading, error} = result.current;
    //Como es sincrono, primero se va a ejecutar lo siguiente, antes de que el fetch lo resuelva
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Debe de tener la información deseada, loading: false, error: false', async() => {
      //Tambien se extrae el  waitForNextUpdate el cual regresa una promesa, por lo cual
      //se puede usar el await, pero para eso la función tiene que ser async();
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    
    await waitForNextUpdate();

    //Desestrucuturar lo que viene del result
    const {data, loading, error} = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
  
  test('Debe de manejar el error', async() => {
    //Tambien se extrae el  waitForNextUpdate el cual regresa una promesa, por lo cual
    //se puede usar el await, pero para eso la función tiene que ser async();
    const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/apid/quotes/1'));
  
    await waitForNextUpdate();
  
    //Desestrucuturar lo que viene del result
    const {data, loading, error} = result.current;
  
    expect(data).toBe(null);
    expect(loading).toBe(false);
    //Lo que dice el error se encuentra en el catch del useFetch.js
    expect(error).toBe('No se  pudo cargar a info');
});
});
