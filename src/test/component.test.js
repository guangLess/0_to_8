import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Square from '../components/Square.jsx';

configure({ adapter: new Adapter() });


describe('<Square />', () => {
    it('should render <Board /> components', () => {
        const wrapper = shallow(<Square />);
        //expect(wrapper.find(Square)).to.have.length(9)
    })
})
