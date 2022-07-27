import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../../../../../components/Lesson/Content/Exercise/Button'

describe('Button Component', () => {
    it('expect component Button render passed text property', () => {
        render(
            <Button
                text='Hello World!'
            />
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })
})