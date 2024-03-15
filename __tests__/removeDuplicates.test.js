const removeDuplicates = require('../scripts/removeDuplicates');

test('removeDuplicates([1, 1, 2]) to equal [1, 2]', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
})

test('removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5]) to equal [1, 2, 3, 4, 5]', () => {
    expect(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
})

describe('removeDuplicates', () => {
    it('should remove duplicates from an array', () => {
        expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
        expect(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
})