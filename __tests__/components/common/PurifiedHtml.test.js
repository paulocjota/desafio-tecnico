import { render } from '@testing-library/react'
import PurifiedHtml from '../../../components/common/PurifiedHtml'
import '@testing-library/jest-dom'

describe('PurifiedHtml', () => {
    it('expect not having an img tag with onerror attribute (XSS)', () => {
        const html = '<div><h1>Hello World!</h1><img src=x onerror=alert(1)//></div>'
        const {container} = render(<PurifiedHtml html={html} />)
        const imgWithOnError = container.querySelector('img[onerror]')
        expect(imgWithOnError).toBeNull()
    })
})