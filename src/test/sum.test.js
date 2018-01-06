//const sum = require('../sum.js');
import { shuffle, swapArrayElements } from '../helper'

describe('helper functions', () => {
    describe('shuffle board', () => {
        let numArray = [0, 1, 2, 4];
        let numLength = numArray.lenght;

        it('should have the same lenght after shuffled', () => {
            shuffle(numArray);
            expect(numArray.lenght).toEqual(numLength);
        })

        it('should shuffle this array with at least one different ordering element', () => {
            let copy = numArray.slice();
            for (let i = 0; i < numLength; i++) {
                const num = numArray[i];
                expect((num !== copy[i])).toEqual(true);
            }
        })
    });

    describe('swapArray function', () => {
        it('should swap the position of two element', () => {
            
        })

    })

});

