import { useContext } from "react"
import { DataContext } from "../DataContext"
import styles from '../ButtonAdd/ButtonAdd.module.css'

export default function ButtonAdd({ item }) {

    const context = useContext(DataContext)

    const addToCart = (item) => () => {
        context.addToCart(item);
    }

    return (
        <button onClick={addToCart(item)} className={styles.buttonAdd}>Add to Cart</button>
    )
}