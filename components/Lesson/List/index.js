import Item from "./Item"
import styles from './styles.module.css'

function List({children}){
    return (
        <nav className={styles.list}>{children}</nav>
    )
}

List.Item = Item

export default List