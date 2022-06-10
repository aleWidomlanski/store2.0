
import { useContext } from "react";
import { DataContext } from "../DataContext";
import styles from './Total.module.css'

export default function Total() {

    const { total } = useContext(DataContext)

    return (
        <div className={styles.container}>
            <h5 className={styles.total}>Total : ${total}</h5>
            <button className={styles.continue}>Continuar Compra</button>
        </div>
    )
}


