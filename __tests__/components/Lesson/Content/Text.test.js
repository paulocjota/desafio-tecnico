import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Text from '../../../../components/Lesson/Content/Text'

describe('Text Component', () => {
    it('expect not having an img tag with onerror attribute (XSS)', () => {
        const html = '<div><h1>Hello World!</h1><img src=x onerror=alert(1)//></div>'
        const content = {
            data: {
                html
            }
        }
        const {container} = render(<Text content={content} />)
        const imgWithOnError = container.querySelector('img[onerror]')
        expect(imgWithOnError).toBeNull()
    })
})