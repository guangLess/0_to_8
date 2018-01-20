import React, {Component} from 'react';
import Enzyme, { shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
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
    const initialState = {memories: [1,2,3]}
    let store, container

    beforeEach( () => {
        store = mockStore(initialState)
        container = shallow(<Game store= {store} />)
    })

    it('renders connected <Game /> component', () => {
        expect(container.length).toEqual(1);
    })
    //FIXME: need to write better this. Disabled button is not right. 😥
    it('renders <Square /> component // need to write more here', () => {
        const content =  {baseIndex:1, part: "1"};
        const group = [1, 2, 3]
        const updatBoard = sinon.spy();
        const squarerapper = mount(<Square part={content} group={group} updatBoard={updatBoard} disable={false} />);
        //const clickHandler = sinon.spy(squarerapper.instance(), 'clickHandler');
        const button = squarerapper.find('button') //.at(0).getProps().disableed()
        console.log(">>",button);
        // const spy = jest.spyOn(squarerapper.instance(), 'clickHandler');
        //button disalbe does not work

        squarerapper.update();
        //squarerapper.find('button:enabled')
        button.simulate('click');
        expect(button.text()).toContain(1);
        expect(updatBoard.calledOnce).toBe(true)

    })
    
    // it('should render itself with props', () => {
    //         const {gameWrapper, props} = setup()
    //         //expect(props.mountMemories.mock.calls.length).toBe(1)
    //         console.log(gameWrapper, props)
    //     })
     })
})
