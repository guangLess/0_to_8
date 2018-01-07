
import { CREATE_BOARD, createBoard,  } from '../redux/reducer'
import configureMockStore from 'redux-mock-store'

describe('Redux Actions', () => {

    it('this action should create board as 1_D array', () => {
        const memories = ['h', 'x', 1, '💪🏼', '🤖']
        const expectedBoard = {
            type: CREATE_BOARD,
            memories
        };
        expect(createBoard(memories)).toEqual(expectedBoard)
    });

})
