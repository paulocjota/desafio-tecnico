import Logo from "./Logo"
import styles from './Styles.module.css'

function Header({children}) {
    return (
        <header className={styles.header}>
            {children}
        </header>
    )
}

Header.Logo = Logo

export default Header