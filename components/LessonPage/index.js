import Page from '../Page'
import { useEffect, useState } from 'react'
import Lesson from '../Lesson'
import getContentComponentFromType from '../../utils/getContentComponentFromType'
import {Lesson as LessonClass} from '../../utils/Lesson'
import fetchList from '../../utils/fetchList'
import fetchLesson from '../../utils/fetchLesson'

export default function LessonPage({list, slug, lesson}) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Page title={`${lesson?.title ?? 'Desafio Tecnico'} - ${list.title}`} description={lesson?.description ? lesson?.description : list.description}>
            {mounted &&
                <Lesson>
                    <Lesson.List>
                        {(list?.children ?? []).map((item, index) => (
                            <Lesson.List.Item
                                key={'lesson-item-' + index}
                                title={item.title}
                                type={item.type}
                                slug={item.slug}
                                isVisualized={LessonClass.isSeen(item.slug)}
                                isCurrentRoute={slug === item.slug}
                            />
                        ))}
                    </Lesson.List>
                    {lesson?.children &&
                        <Lesson.Content type={lesson.type}  slug={lesson.slug}>
                                <Lesson.Content.Title>{lesson.title}</Lesson.Content.Title>
                                {lesson.children.map( (item, index) => {
                                    const Component = getContentComponentFromType(item.type)
                                    return <Component key={`lesson-content-item-${slug}_${item.type}_${index}`} content={item} slug={slug} />
                                })}
                        </Lesson.Content>
                    }
                </Lesson>
            }
        </Page>
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
            lesson: responseLesson.data.result,
            slug: context.params.slug
        },
    }
}