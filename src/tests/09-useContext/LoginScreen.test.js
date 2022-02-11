import { LoginScreen } from "../../components/09-useContext/LoginScreen"
import { mount } from 'enzyme'
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en LoginScreen', () => { 


    const setUser = jest.fn();

    const wrapper = mount( <UserContext.Provider value={{
        setUser
    }}>
        <LoginScreen/>
    </UserContext.Provider>);

    
    test('Debe de mostrarse correctamente', () => { 
    
        expect(wrapper).toMatchSnapshot();
     });

     test('Debe de ejecutar el setUser con el argumento esperando', () => { 
         //Se hace la simulación del boton y despues se ejecuta como si fuera función con el ejecButton()
        // const ejecButton  = wrapper.find('button').prop('onClick');
        // ejecButton();


        //Con los parentesis al final se esta llamando la función en la misma linea
         wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'lorena'
        });
        
      });
 })