import { createStore, applyMiddleware } from 'redux'
//import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
//import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import {shuffle, swapArrayElements,formatArrayToObj } from '../helper'


export const memoryStack = [ '🥚', '🌲', '🍃','🍂',
                      '🍀', '️🌴', '🍪',
                      'x','🌿' ]  // 🌿 🌾🎋🍂🍁🌵 🌍🐾 ❄️🌼'🌱', 


/*const memoryStack = [ '🥚', '🌲', '🍃','🍂','x','🌿' ]*/
                                          
const testMemory = ['x','0','x','0','x','0','x','0'];

//action 
export const CREATE_BOARD = 'CREATE_BOARD'

//Action creator
export const createBoard = (memories) => ({
    type: CREATE_BOARD,
    memories
})

//reducer default test = ['x','0','x','0','x','0','x','0']
export const memoryReducer = (state = memoryStack, action) => {
    switch (action.type){
        case CREATE_BOARD:
            return action.memories
        default:
            return state
    }
}

//
export const getMemoryBoard = () => dispatch => {
    //fomat board first 
    let formated = formatArrayToObj(memoryStack)
    shuffle(formated)
    dispatch(createBoard(formated))
}

export const shiftMemories = (shiftStack, emptyIndex, nextIndex) => dispatch => {
    //check then swap
    swapArrayElements(shiftStack, emptyIndex, nextIndex)//modular for easier swap
    dispatch(createBoard(shiftStack))
}


const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware
    // createLogger({collapsed: true})
  ))

const store = createStore(memoryReducer, middleware)
export default store
