
import store, { CREATE_BOARD, createBoard, getMemoryBoard, memoryStack} from '../redux/reducer'
import configureStore from 'redux-mock-store'
//import fetchMock from 'fetch-mock'
const mockStore = configureStore({memoryStack});
//console.log(store)

describe('Redux Actions', () => {
    //const memories = ['h', 'x', 1, '💪🏼', '🤖']
    //let mStore = mockStore(memoryStack);
    // describe('async actions', () => {
    //     beforeEach( () => {
    //         mockStore = mockStore(memoryStack);
    //     })
    // })

    it('this action should create board as 1_D array', () => {
        const expectedBoard = {
            type: CREATE_BOARD,
            memories: memoryStack
        };
        expect(createBoard(memoryStack)).toEqual(expectedBoard)
    });
// test connect
/*
    it('Should dispatch .....', () => {
        mStore.dispatch(getMemoryBoard)
        let newBoard = mockStore.getState();
        console.log("newBoard", newBoard)
    })
*/
})

describe('store', () => {
    it('should initialize state with defalut stack as what it is', () => {
        const actual  = store.getState()
        const expected = memoryStack
        //console.log(actual, "----", expected)
        expect(actual).toEqual(expected)
    })
})
