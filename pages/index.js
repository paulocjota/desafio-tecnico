import fetchList from '../utils/fetchList'
import LessonPage from '../components/LessonPage'

export default function Home({list}) {
    return (
        <LessonPage list={list} lesson={null} slug={null} />
    )
}

export async function getStaticProps() {
    const responseList = await fetchList()

    return {
        props: {
            list: responseList.data.result,
        },
    }
}