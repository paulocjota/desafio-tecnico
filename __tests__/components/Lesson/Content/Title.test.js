import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Title from '../../../../components/Lesson/Content/Title'

describe('Title Component', () => {
    it('expect component Title accept children', () => {
        render(
            <Title>
                <div>Hello World!</div>
            </Title>
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })
})