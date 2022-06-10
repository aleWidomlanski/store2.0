import Image from "next/image"
import styles from '../CartItems/CartItems.module.css'
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import {DataContext} from '../../components/DataContext'

export default function CartItems({ item }) {

    const {addToQuantityProduct, subtractToQuantityProduct, deleteProduct} = useContext(DataContext)

    const addToQuantity = (item) => () => {
        addToQuantityProduct(item)
    }

    const subtractQuantity = (item) => () => {
        subtractToQuantityProduct(item)
    }

    const deleteItem = (item) => () => {
        deleteProduct(item)
    }



    return (
        <>
            <div className={styles.container}>
                <div className={styles.img}>
                    {item.photo && <Image src={item.photo} alt={item.title} width="100" height="100" />}
                </div>
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.info} >
                    <div className={styles.buttons}>
                        <div >
                            <h5>Cantidad: {item.quantity}</h5>
                            <h3 className={styles.price}>$  {item.quantity * item.price}  </h3>
                        </div>
                        <div className={styles.changeQuantity}>
                            {item.quantity < 2 ?
                                <button className={styles.button} onClick={addToQuantity(item)}>+</button> :
                                <>
                                    <button className={styles.button} onClick={addToQuantity(item)}>+</button>
                                    <button className={styles.button} onClick={ subtractQuantity(item)}>-</button>
                                </>
                            }
                            <button className={styles.button}><FaTrashAlt onClick={deleteItem(item)} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}