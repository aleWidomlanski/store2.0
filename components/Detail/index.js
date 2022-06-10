import Image from "next/image"
import styles from "../../components/Detail/Detail.module.css"
import ButtonAdd from "../ButtonAdd/ButtonAdd"

export default function Detail({ item }) {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={item.photo} alt={item.title} width="125" height="125" />
            </div>
            <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <h3 className={styles.description}>{item.description}</h3>
                <h3 className={styles.price}>$ {item.price}</h3>
                <ButtonAdd item={item} />
            </div>
        </div>
    )
}