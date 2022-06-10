import { useContext } from "react";
import { DataContext } from "../DataContext";
import { FaShoppingCart } from "react-icons/fa";
import styles from '../../components/Cart/Cart.module.css'
import Link from "next/link";

export default function Cart() {

    const { quantityProductCart } = useContext(DataContext)

    return (
        <div className={styles.container}>
            <>
                <Link href={'/cart'}>
                    <a><FaShoppingCart className={styles.cart} /></a>
                </Link>
            </>

            <span className={styles.quantity}>{quantityProductCart}</span>
        </div>
    )
}

