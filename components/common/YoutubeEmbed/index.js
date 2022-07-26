import getStringBetween from '../../../utils/getStringBetween'
import styles from './styles.module.css'

export default function YoutubeEmbed({ link }){
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
            ></iframe>
        </div>
    )
}