import React, {Component} from 'react';
import Enzyme, { shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk'
import Square from '../components/Square.jsx';
import Game from '../components/Game.jsx';


import configureMockStore from 'redux-mock-store'

Enzyme.configure({ adapter: new Adapter()});
function setup() {
    const props = {
        mountMemories: jest.fn()
    }
    const gameWrapper = mount(<Game {...props} />)
    return {
        props,
        gameWrapper
    }
}

describe('components', () => {
    describe('Game', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares);
    const initialState = {mempries: [1,2,3]}
    let store, container

    beforeEach( () => {
        store = mockStore(initialState)
        container = shallow(<Game store= {store} />)

    })

    it('renders connected <Game /> component', () => {
        expect(container.length).toEqual(1);
    })
    /*it('should render itself with props', () => {
            const {gameWrapper, props} = setup()
            expect(props.mountMemories.mock.calls.length).toBe(1)
            console.log(gameWrapper)
        })
    })*/
    })
})

/*
describe('<Square />', () => {
    it('should render <Board /> components', () => {
        const wrapper = shallow(<Square />);
        //expect(wrapper.find(Square)).to.have.length(9)
    })
*/