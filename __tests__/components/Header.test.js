import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../../components/Header'

describe('Header Component', () => {
    it('expect component Header accept children', () => {
        render(
            <Header>
                <h1>Hello World!</h1>
            </Header>
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })
})