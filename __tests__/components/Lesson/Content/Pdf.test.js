import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pdf from '../../../../components/Lesson/Content/Pdf'

describe('Pdf Component', () => {
    it('expect component Pdf render passed text property', () => {
        const content = {
            data: {
                link: 'https://www.google.com/example.pdf'
            }
        }

        const {container} = render(
            <Pdf
                content={content}
            />
        )

        expect(container.querySelector(`[href="${content.data.link}"]`)).toBeInTheDocument()
    })
})