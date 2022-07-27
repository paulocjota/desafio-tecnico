import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '../../../components/Header/Logo'

describe('Logo Component', () => {
    it('expect component Logo have "Logo" text', () => {
        render(<Logo />)

        expect(screen.getByText('Logo')).toBeInTheDocument()
    })
})