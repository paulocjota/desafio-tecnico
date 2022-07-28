import { useContext } from 'react'
import { LessonContentContext } from '../../../contexts/LessonContentContext'
import getStringBetween from '../../../utils/getStringBetween'
import { Lesson } from '../../../utils/Lesson'
import styles from './styles.module.css'

export default function YoutubeEmbed({ link }){
    const {slug} = useContext(LessonContentContext)
    const videoId = getStringBetween(link, '?v=')

    return (
        <div className={styles.videoContainer}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture
                "
                allowFullScreen
                onPlay={Lesson.setSeen(slug)}
            ></iframe>
        </div>
    )
}