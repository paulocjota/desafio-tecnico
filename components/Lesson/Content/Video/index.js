import { useContext } from 'react'
import { LessonContentContext } from '../../../../contexts/LessonContentContext'
import YoutubeEmbed from '../../../common/YoutubeEmbed'
import getStringBetween from '../../../../utils/getStringBetween'
import { Lesson } from '../../../../utils/Lesson'

export default function Video({content}){
    const {slug} = useContext(LessonContentContext)
    const videoId = getStringBetween(content.data.link, '?v=')

    return (
        <YoutubeEmbed
            videoId={videoId}
            onReachPercentage={
                () => {
                    Lesson.setSeen(slug)
                }
            }
            targetPercentage={1}
        />
    )
}