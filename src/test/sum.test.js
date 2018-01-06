const sum = require('../sum.js');
import { shuffle } from '../helper'


describe('empty', () => {
    it('should work', () => {
        expect(true).toEqual(true);
    });
})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('shuffle board', () => {
    let numArray = [0, 1, 2, 4];
    let copy = numArray.slice()
    console.log(copy)
    let numLength = numArray.lenght;
    shuffle(numArray);
    console.log(numArray)

    it ('should have the same lenght after shuffled', () => {
        expect(numArray.lenght).toEqual(numLength);
    })
    
    it('should shuffle this array with at least one different ordering element', ()  => {
        for (let i = 0 ; i < numLength; i++) {
                const num = numArray[i];
                console.log(num, i, copy[i])            
                expect((num !== copy[i]) ).toEqual(true);
        }
    })
});

