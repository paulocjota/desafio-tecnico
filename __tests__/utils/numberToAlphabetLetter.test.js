import numberToAlphabetLetter from '../../utils/numberToAlphabetLetter'

describe('numberToAlphabetLetter', () => {
    it('passing 1 expectes b', () => {
        const received = numberToAlphabetLetter(1)
        const expected = 'b'
        expect(received).toEqual(expected)
    })

    it('passing more than alphabet array expects undefined', () => {
        const received = numberToAlphabetLetter(26)
        expect(received).toEqual(undefined)
    })

    it('passing "a" expects throw "first parameter should be a number"', () => {
        expect(() => { numberToAlphabetLetter('a') }).toThrow('first parameter should be a number');
    })
})