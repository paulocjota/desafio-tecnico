import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Lesson from '../../components/Lesson'
import Content from '../../components/Lesson/Content'
import List from '../../components/Lesson/List'

describe('Lesson Component', () => {
    it('expect component Lesson accept children', () => {
        render(
            <Lesson>
                <h1>Hello World!</h1>
            </Lesson>
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })

    it('expect component Lesson has Content Component inside', () => {
        const received = Lesson.Content
        const expected = Content
        expect(received).toEqual(expected)
    })

    it('expect component Lesson has List Component inside', () => {
        const received = Lesson.List
        const expected = List
        expect(received).toEqual(expected)
    })
})