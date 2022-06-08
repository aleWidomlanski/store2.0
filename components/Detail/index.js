import { useContext } from "react";
import { DataContext } from "../DataContext";
import Image from "next/image"
import styles from "../../components/Detail/Detail.module.css"

export default function Detail({ item }) {

    const context = useContext(DataContext)

    const addToCart = (item) => () => {
        context.addToCart(item);
    }

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={item.image} alt={item.title} width="400" height="400" />
            </div>
            <div className={styles.info}>
                <h4>{item.title}</h4>
                <h4>$ {item.price}</h4>
                <p>{item.description}</p>
                <button onClick={addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    )
}