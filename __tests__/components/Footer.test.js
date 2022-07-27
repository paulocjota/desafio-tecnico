import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../components/Footer'

describe('Footer Component', () => {
    it('expect component Footer have "Copyright © 2022" text', () => {
        render(<Footer />)

        expect(screen.getByText('Copyright © 2022')).toBeInTheDocument()
    })
})