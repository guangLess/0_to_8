import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Game from '../components/Game.jsx'

configure({ adapter: new Adapter() });


describe('<Game />', () => {
    it('should render <Board /> components', () => {
        //const wrapper = shallow(<Game />);
        //expect(wrapper.find(Board)).to.equal(true);
    })
})
