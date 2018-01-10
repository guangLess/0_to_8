
//FIXME: use wild card here, the list is getting very long
import store, { CREATE_BOARD, createBoard, getMemoryBoard, memoryStack, memoryReducer} from '../redux/reducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('Redux ', () => {
    //const memories = ['h', 'x', 1, '💪🏼', '🤖']
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
        it('should returns correct testmemories after called getState()', () => {
            const testMemories = ['h', 'x', 1, '💪🏼', '🤖'];
            const mockedStore = mockStore({memories: testMemories})
            mockedStore.dispatch(createBoard(testMemories))
            
            const expected = {memories: testMemories}
            expect(mockedStore.getState()).toEqual(expected)
        })
    })
})

describe('connect', () => {
    const create = () => {
        const testStore = {
            getState: jest.fn(() => ({})),
            dispatch: jest.fn(),
        };
        const next = jest.fn()
        const invoke = (action) => thunk(testStore)(next)(action)
        return {testStore, next, invoke}
    };

    it('passes through non-function action', () => {
        const { next, invoke } = create()
        const action = { type: 'TEST'}
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
    })
    it('calls the function', () => {
        const { invoke } = create()
        const fn = jest.fn()
        invoke(fn)
        expect(fn).toHaveBeenCalled()
    })

    it('passes dispatch and getState', () => {
        const testAction = {type: 'TestAction'}
        const { testStore, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch(testAction)
          getState();
        })
        expect(testStore.dispatch).toHaveBeenCalledWith(testAction)
        expect(testStore.getState).toHaveBeenCalled()
      });
})