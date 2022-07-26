import styles from './styles.module.css'

export default function Pdf({content}){
    return (
        <a
            rel='noreferrer'
            target="_blank"
            href={content.data.link}
            className={styles.a}
        >
            Baixar PDF
        </a>
    )
}