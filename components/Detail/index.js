import { useContext } from "react";
import { DataContext } from "../DataContext";
import Image from "next/image"

export default function Detail({ item }) {

    const context = useContext(DataContext)

    const addToCart = (item) => () => {
        context.addToCart(item);
    }

    return (
        <>
            <Image src={item.image} alt={item.title} width="400" height="400" />
            <h4>{item.title}</h4>
            <h4>$ {item.price}</h4>
            <p>{item.description}</p>
            <button onClick={addToCart(item)}>Add to Cart</button>
        </>
    )
}