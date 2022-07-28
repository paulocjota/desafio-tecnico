import styles from './styles.module.css'
import Video from '../Content/Video'
import Exercise from '../Content/Exercise'
import Text from '../Content/Text'
import Title from './Title'
import Pdf from './Pdf'
import React from 'react'
import { LessonContentContext } from '../../../contexts/LessonContentContext'

function Content({children, slug, type}){

    return (
        <LessonContentContext.Provider value={{ type: type, slug: slug }}>
            <div className={styles.content}>{children}</div>
        </LessonContentContext.Provider>
    )
}

Content.Video = Video
Content.Exercise = Exercise
Content.Text = Text
Content.Title = Title
Content.Pdf = Pdf

export default Content