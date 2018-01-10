
//FIXME: use wild card here, the list is getting very long
import store, { CREATE_BOARD, createBoard, getMemoryBoard, memoryStack, memoryReducer} from '../redux/reducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Redux ', () => {
    //const memories = ['h', 'x', 1, '💪🏼', '🤖']
    //let mStore = mockStore(memoryStack);
    // describe('async actions', () => {
    //     beforeEach( () => {
    //         mockStore = mockStore(memoryStack);
    //     })
    // })
    describe('Action', () => {
        it('createBoard action should create a 1_D array for the board', () => {
            const expectedBoard = {
                type: CREATE_BOARD,
                memories: memoryStack
            };
            expect(createBoard(memoryStack)).toEqual(expectedBoard)
        });
    })

    describe('Reducer', () => {
        it('Reducer should return initial state(memoryStack) if args are empty action and undefined state', () => {
            expect(memoryReducer(undefined, {})).toEqual(memoryStack);
        })
        it('Reducer should accept action: createBoard, and returns a 1_D array', () => {
            let testStack = [1, 2, 3]
            expect(memoryReducer(test, createBoard(testStack))).toEqual(testStack);
        })
    })

    describe('store', () => {
        it('should initialize state with defalut stack as what it is', () => {
            /* FIXME: store needs to be mocked? 
            const actual  = store.getState()
            const expected = memoryStack
            expect(actual).toEqual(expected)
            */
        })

        it('should execute getMemoryBoard', () => {
            const testStore = mockStore({ memories: [] })
            //console.log("testStore", testStore.dispatch(getMemoryBoard));
            //return
             let x = testStore.dispatch(getMemoryBoard)
             console.log(">>>>", x, typeof x);
             
             //getActions().toEqual(createBoard)
        
        })
        //console.log(store)
    })

// // test connect
//     it('Should dispatch .....', () => {
//         // const memories = ['h', 'x', 1, '💪🏼', '🤖']
//         const testStore = mockStore({memoryStack});
//         //
//     })

})