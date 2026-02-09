import { HouseIcon, HistoryIcon, Settings, Sun } from 'lucide-react'
import styles from './style.module.css'

export function Menu() {
    return (
        <div className={styles.Menu}>
            <div className={styles.MenuLink}>
                <a className={styles.MenuCard} href="#">
                    <HouseIcon size={24} />
                </a>
                <a className={styles.MenuCard} href="#">
                    <HistoryIcon size={24} />
                </a>
                <a className={styles.MenuCard} href="#">
                    <Settings size={24} />
                </a>
                <a className={styles.MenuCard} href="#">
                    <Sun size={24} />
                </a>
            </div>
        </div>
    )
}