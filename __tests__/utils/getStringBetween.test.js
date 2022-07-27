import getStringBetween from "../../utils/getStringBetween"

describe('getStringBetween', () => {
    it('passing "Hello_World", null, "_" should return "Hello"', () => {
        const received = getStringBetween('Hello_World', null, '_')
        const expected = 'Hello'
        expect(received).toEqual(expected)
    })

    it('passing "Hello_World", "_", null should return "World"', () => {
        const received = getStringBetween('Hello_World', '_', null)
        const expected = 'World'
        expect(received).toEqual(expected)
    })

    it('passing "_SOME_STRING_", "_", "_" should return SOME_STRING', () => {
        const received = getStringBetween('_SOME_STRING_', '_', '_')
        const expected = 'SOME_STRING'
        expect(received).toEqual(expected)
    })
})