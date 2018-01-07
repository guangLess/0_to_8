
import store, { CREATE_BOARD, createBoard, getMemoryBoard, memoryStack} from '../redux/reducer'
import configureMockStore from 'redux-mock-store'
//console.log(store)

describe('Redux Actions', () => {
    const memories = ['h', 'x', 1, '💪🏼', '🤖']
    it('this action should create board as 1_D array', () => {
        const expectedBoard = {
            type: CREATE_BOARD,
            memories
        };
        expect(createBoard(memories)).toEqual(expectedBoard)
    });

})

describe('store', () => {
    it('should initialize state with defalut stack as what it is', () => {
        const actual  = store.getState()
        const expected = memoryStack
        //console.log(actual, "----", expected)
        expect(actual).toEqual(expected)
    })
    //it ('should ')
})
