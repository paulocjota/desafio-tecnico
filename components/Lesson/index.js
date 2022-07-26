import Content from './Content'
import List from './List'
import styles from './styles.module.css'

function Lesson({children}){
    return (
        <main className={styles.main}>{children}</main>
    )
}

Lesson.Content = Content
Lesson.List = List

export default Lesson