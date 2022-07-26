export class Lesson{
    static getLocalStorageKey(){
        return 'lessons'
    }

    static getLessons(){
        const lessons = window.localStorage.getItem(this.getLocalStorageKey())
        return lessons === null ? [] : JSON.parse(lessons)
    }

    static setSeen(slug){
        const lessons = this.getLessons()
        const lessonsWithoutCurrent = lessons.filter( value => value.slug !== slug)
        const currentLesson = {
            slug: slug,
            visualized: true
        }
        const data = JSON.stringify([...lessonsWithoutCurrent, currentLesson])
        window.localStorage.setItem(this.getLocalStorageKey(), data)
    }

    static isSeen(slug){
        const lessons = this.getLessons()
        return lessons.some(item => item.slug === slug && item.visualized === true)
    }

    static reset(){
        window.localStorage.removeItem(this.getLocalStorageKey())
    }
}