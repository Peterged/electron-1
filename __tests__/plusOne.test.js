const plusOne = require('../scripts/plusOne');


describe('plusOne - short numbers', () => {
    it('should add the conjoint numbers by 1', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    })
})


describe('plusOne - long numbers', () => {
    it('should add the conjoint numbers by 1', () => {
        expect(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])).toEqual([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]);
    })
})
