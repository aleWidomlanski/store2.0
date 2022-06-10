import Link from "next/link"
import styles from '../../components/Menu/Menu.module.css'

export default function Menu() {
    return (
        <>
            <Link href={'/'}>
                <a className={styles.menu}>Home</a>
            </Link>
            <Link href={'/products'}>
                <a className={styles.menu}>Products</a>
            </Link>
        </>
    )
}
