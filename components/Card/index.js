import { useContext } from "react"
import { DataContext } from "../DataContext"
import Image from "next/image"
import Link from 'next/link'
import styles from '../Card/Card.module.css'



export default function Card({ item }) {

    const context = useContext(DataContext)

    const addToCart = (item) => () => {
        context.addToCart(item);
    }

    return (
        <div className={styles.container}>
            <Link href={`http://localhost:3000/store/[id]`} as={`http://localhost:3000/store/${item.id}`}>
                <a>
                    <Image src={item.image} alt={item.title} width="200" height="200" />
                    <h4>{item.title}</h4>
                    <h3>$ {item.price}</h3>
                </a>
            </Link>
            <button onClick={addToCart(item)}>Add to Cart</button>
        </div>
    )
}