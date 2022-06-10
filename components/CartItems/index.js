import Image from "next/image"
import styles from '../CartItems/CartItems.module.css'



export default function CartItems({ item }) {
    return (
        <div className={styles.container}>
            <Image src={item.image} alt={item.title} width="200" height="200" />
            <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <h3 className={styles.price}>$ {item.price}</h3>
            </div>
        </div>
    )
}