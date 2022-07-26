import { CheckIcon } from '@heroicons/react/solid'
import styles from './styles.module.css'
import stylesFromList from '../styles.module.css'
import Link from 'next/link'
import getIconComponentFromType from '../../../../utils/getIconComponentFromType'

export default function Item({title, type, slug, isVisualized, isCurrentRoute}){
    const TypeIcon = getIconComponentFromType(type)

    return (
        <Link href={slug}>
            <a>
                <div className={`${styles.item} ${stylesFromList.item}`}
                    data-current-path={isCurrentRoute}
                >
                    <div className={`${styles.typeIconWrapper} ${stylesFromList.typeIconWrapper}`}>
                        <TypeIcon className={styles.typeIcon} />
                    </div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.checkIconWrapper}>
                        {isVisualized &&
                            <CheckIcon className={styles.checkIcon} />
                        }
                    </div>
                </div>
            </a>
        </Link>
    )
}