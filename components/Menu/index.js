import Link from "next/link"
import styles from '../../components/Menu/Menu.module.css'

export default function Menu() {
    return (
        <>
            <Link href={'/'}>
                <a className={styles.menu}>Home</a>
            </Link>
            <Link href={'/store'}>
                <a className={styles.menu}>Store</a>
            </Link>
        </>
    )
}
