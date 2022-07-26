import Link from 'next/link'
import styles from './styles.module.css'

export default function Logo(){
    return (
        <Link href="/">
            <a>
                <div className={styles.logo}>Logo</div>
            </a>
        </Link>
    )
}