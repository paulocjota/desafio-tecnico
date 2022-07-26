import styles from './styles.module.css'
import Video from '../Content/Video'
import Exercise from '../Content/Exercise'
import Text from '../Content/Text'
import Title from './Title'
import Pdf from './Pdf'

function Content({children}){
    return (
        <div className={styles.content}>{children}</div>
    )
}

Content.Video = Video
Content.Exercise = Exercise
Content.Text = Text
Content.Title = Title
Content.Pdf = Pdf

export default Content