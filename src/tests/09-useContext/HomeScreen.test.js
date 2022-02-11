import { HomeScreen } from "../../components/09-useContext/HomeScreen";
import {mount} from 'enzyme';
import { UserContext } from "../../components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => { 
    
    const user = {
        name: 'Lorena',
        email: 'lore@gmail.com'
    } 
    
    //el shallow solo renderiza el primer componente que es el useContext
    //en este caso necesitamos el homeScreen por lo cual se usa mount
    const wrapper = mount(
        //Para evitar que nos muestre error porque al principio tiene el useContext
        <UserContext.Provider value={{
            user        
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrar el componente <HomeScreen />', () => { 
        expect(wrapper).toMatchSnapshot();        
     })
 })