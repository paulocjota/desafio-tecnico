import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page from '../../components/Page'

jest.mock('next/head', () => {
    return {
        __esModule: true,
        default: ({ children }) => {
            return <>{children}</>;
        },
    };
});

describe('Page', () => {
    it('expect title and description render correctly', () => {
        const {container} = render(
            <Page
                title={'Title Hello World!'}
                description={'Description Hello World!'}
            />, { container: document.body.appendChild(document.createElement('head')) }
        )

        expect(document.title).toEqual('Title Hello World!')
        expect((container.querySelector('meta[name="description"]')).content).toEqual('Description Hello World!')
    })

    it('expect component Page accept children', () => {
        render(
            <Page title="a" description="b">
                <h1>Hello World!</h1>
            </Page>
        )

        expect(screen.getByText('Hello World!')).toBeInTheDocument()
    })
})