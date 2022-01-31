import {shallow} from "enzyme";
import { HookApp } from "../HookApp";


describe('Pruebas en el <HookApp/>', () => {
  test('Debe  mostrar correctamente el componente <HookApp/>', () => {
     const wrapper = shallow(<HookApp />);

     expect(wrapper).toMatchSnapshot();

  });
  
});
