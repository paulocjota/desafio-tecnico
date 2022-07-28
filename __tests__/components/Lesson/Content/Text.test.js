import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Text from '../../../../components/Lesson/Content/Text'
import { LessonContentContext } from '../../../../contexts/LessonContentContext'

describe('Text Component', () => {
    it('expect not having an img tag with onerror attribute (XSS)', () => {
        const html = '<div><h1>Hello World!</h1><img src=x onerror=alert(1)//></div>'
        const content = {
            data: {
                html
            }
        }
        const {container} = render(
            <LessonContentContext.Provider value={{ type: 'slut', slug: 'hello-world'}}>
                <Text content={content} />
            </LessonContentContext.Provider>
        )
        const imgWithOnError = container.querySelector('img[onerror]')
        expect(imgWithOnError).toBeNull()
    })
})