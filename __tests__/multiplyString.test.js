const multiplyString = require('../scripts/multiplyString');

describe('MultiplyString for small numbers', () => {
    it('should multiply two small two digit numbers', () => {
        expect(multiplyString('20', '15')).toEqual('300');
        expect(multiplyString('60', '29')).toEqual('1740');
    })
})

describe('MultiplyString for large numbers', () => {
    it('should multiply two large numbers', () => {
        expect(multiplyString('123456789', '987654321')).toEqual('121932631112635269');
    })
});

describe('MultiplyString for massive numbers', () => {
    it('should multiply two massive numbers', () => {
        expect(multiplyString('123456789123456789', '987654321987654321')).toEqual('121932631356500531347203169112635269');
    })
})

// Path: __tests__/removeDuplicates.test.js
