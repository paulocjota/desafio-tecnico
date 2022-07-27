import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Content from '../../../components/Lesson/Content'
import Text from '../../../components/Lesson/Content/Text'
import Exercise from '../../../components/Lesson/Content/Exercise'
import Pdf from '../../../components/Lesson/Content/Pdf'
import Video from '../../../components/Lesson/Content/Video'
import Title from '../../../components/Lesson/Content/Title'

describe('Content Component', () => {
    it('expect component Content accept children', () => {
        render(
            <Content>
                <h1>Hello World!</h1>
            </Content>
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })

    it('expect component Content has Text Component inside', () => {
        const received = Content.Text
        const expected = Text
        expect(received).toEqual(expected)
    })

    it('expect component Content has Exercise Component inside', () => {
        const received = Content.Exercise
        const expected = Exercise
        expect(received).toEqual(expected)
    })

    it('expect component Content has Pdf Component inside', () => {
        const received = Content.Pdf
        const expected = Pdf
        expect(received).toEqual(expected)
    })

    it('expect component Content has Video Component inside', () => {
        const received = Content.Video
        const expected = Video
        expect(received).toEqual(expected)
    })

    it('expect component Content has Title Component inside', () => {
        const received = Content.Title
        const expected = Title
        expect(received).toEqual(expected)
    })
})