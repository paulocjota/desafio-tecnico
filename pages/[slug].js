import fetchList from '../utils/fetchList'
import fetchLesson from '../utils/fetchLesson'
import LessonPage from '../components/LessonPage'

export default function Home({list, slug, lesson}) {
    return (
        <LessonPage list={list} lesson={lesson} slug={slug} />
    )
}

export async function getStaticPaths() {
    const response = await fetchList()

    const paths = response.data.result.children.map( item => {
        return {
            params: {
                slug: item.slug,
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const responseList = await fetchList()
    const responseLesson = await fetchLesson(context.params.slug)

    return {
        props: {
            list: responseList.data.result,
            slug: context.params.slug,
            lesson: responseLesson.data.result
        },
    }
}