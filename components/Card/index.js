import Image from "next/image"
import Link from 'next/link'
import ButtonAdd from "../ButtonAdd/ButtonAdd"
import styles from '../Card/Card.module.css'



export default function Card({ item }) {
    return (
        <div className={styles.container}>
            <Link href={`http://localhost:3000/store/[id]`} as={`http://localhost:3000/store/${item.id}`}>
                <a>
                    <Image src={item.image} alt={item.title} width="200" height="200" />
                    <div className={styles.info}>
                        <h4 className={styles.title}>{item.title}</h4>
                        <h3 className={styles.price}>$ {item.price}</h3>
                    </div>
                </a>
            </Link>
            <ButtonAdd item={item} />
        </div>
    )
}