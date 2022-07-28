import { useContext } from 'react'
import { LessonContentContext } from '../../../../contexts/LessonContentContext'
import YoutubeEmbed from '../../../common/YoutubeEmbed'

export default function Video({content}){
    const {slug} = useContext(LessonContentContext)

    return (
        <>
            {content.data.provider === 'youtube' &&
                <YoutubeEmbed
                    link={content.data.link}
                    slug={slug}
                />
            }
        </>
    )
}