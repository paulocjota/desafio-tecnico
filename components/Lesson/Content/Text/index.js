import { useContext } from 'react'
import { LessonContentContext } from '../../../../contexts/LessonContentContext'
import { Lesson } from '../../../../utils/Lesson'
import PurifiedHtml from '../../../common/PurifiedHtml'

export default function Text({content}){
    const {slug, type} = useContext(LessonContentContext)
    return (
        <PurifiedHtml onPlay={type === 'text' ? Lesson.setSeen(slug) : () => {}} html={content.data.html}/>
    )
}