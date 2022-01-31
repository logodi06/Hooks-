import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";


describe('Pruebas en useCounter', () => {

  // No se puede hacer el MatchSnappShot, porque el hook no tiene codigo html, nada que mostrar en pantalla
  //  
  test('Debe de retornar valores por defecto', () => {
    // Hay que renderizar el hook, y para eso hay que llamar el método renderHook -> este
    // recibe un callback con useCounter
        const {result} = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        // typeof que sea de tipo de -> en este caso function
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        
        
  });
  test('Debe de tener el counter en 100', () => {
    // Hay que renderizar el hook, y para eso hay que llamar el método renderHook -> este
    // recibe un callback con useCounter
        const {result} = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);
  });

  test('Debe de incrementar el counter en 1', () => {
      const {result} = renderHook( () => useCounter(100) );
      // Se extrae la función increment
      const {increment} = result.current;
      //El act es para cuando se quiere hacer una acción en las funciones, y se importa del testing-library-react...
      act( () => {
        increment();
        //Para hacer que se incremente dos veces, debemos llamar de nuevo la función
        //increment() pero en useCounter.js se debe hacer un callback
        
      });
      const {counter} = result.current;
      expect(counter).toBe(101);
  });

  test('Debe de descrementar el counter en 1', () => {
      const {result} = renderHook( () => useCounter(100));
      const {decrement} = result.current;

      act( () => {
        decrement();
      });

      const {counter} = result.current;
      expect(counter).toBe(99);

  });
  
  test('Debe establecer el valor de 100', () => {
    const { result } = renderHook( () => useCounter(100));
    const { increment, reset } = result.current;
  
    act( () => {
      increment();
      reset();
    });

    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  

  
  
});
