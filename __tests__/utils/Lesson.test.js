import { Lesson } from '../../utils/Lesson'

describe('Lesson (Class)', () => {
    it('setting seen for slug "abc-def" expects an object with same structure in localStorage', () => {
        Lesson.setSeen('abc-def')
        const received = JSON.parse(window.localStorage.getItem('lessons'))
        const expected = [{ slug: 'abc-def', seen: true}]
        expect(received).toEqual(expected)
    })

    it('expects isSeen method return true', () => {
        Lesson.setSeen('asdasd')
        const received = Lesson.isSeen('asdasd')
        const expected = true
        expect(received).toEqual(expected)
    })

    it('after using reset expects a blank array', () => {
        Lesson.setSeen('hehehe')
        Lesson.setSeen('hahaha')
        Lesson.setSeen('asd')
        Lesson.reset()
        const received = Lesson.getLessons()
        const expected = []
        expect(received).toEqual(expected)
    })

    it('expect 3 lessons from getLessons', () => {
        Lesson.setSeen('hehehe')
        Lesson.setSeen('hahaha')
        Lesson.setSeen('asd')
        const received = Lesson.getLessons()
        const expected = [
            {slug: 'hehehe', seen: true},
            {slug: 'hahaha', seen: true},
            {slug: 'asd', seen: true}
        ]
        expect(received).toEqual(expected)
    })
})