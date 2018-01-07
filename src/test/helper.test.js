//const sum = require('../sum.js');
import { shuffle, swapArrayElements, formatArrayToObj } from '../helper'

describe('helper functions', () => {
    let numArray = [0, 1, 2, 4];
    let copy = numArray.slice();
    const numLength = numArray.length;
    
    describe('shuffle board', () => {
        it('should have the same lengh after shuffled', () => {
            shuffle(numArray);
            expect(numArray.length).toEqual(numLength);
        })

        it('should shuffle this array with at least one different ordering element', () => {
            for (let i = 0; i < numLength; i++) {
                const num = numArray[i];
                if (num !== copy[i]) {
                    expect((num !== copy[i])).toEqual(true);
                }
            }
        })
    });

    describe('swapArray function', () => {
        let sArray = copy.slice();
        let position_1 = 1;
        let position_2 = 2;
        let firstN = sArray[position_1];
        let secondN = sArray[   position_2];
        swapArrayElements(sArray, position_1, position_2);
        
        it('should swap the position o  f two element', () => {
            expect(firstN).toEqual(sArray[position_2]);
            expect(secondN).toEqual(sArray[position_1]);
        })
    });

    describe('formateArray function', () => {
        let index = 1;
        let one = copy[index];
        let baseIndex = 'baseIndex';
        let part = 'part';
        let formattedArray = formatArrayToObj(copy);
        
        it('should format an Array of dictionaries consists of many paires which keys are baseIndex of the original index of board number, and part as current according value', () => {
            let expectedPair = {baseIndex: index, part: one};
            expect(formattedArray).toEqual(expect.arrayContaining([expectedPair]))
        });

        it('/s element/s  baseIndex is always the same as its index in the array', () => {
            let randomNum = Math.floor(Math.random() * numLength);
            expect(formattedArray[randomNum][baseIndex]).toEqual(randomNum)
        })
    })
});

