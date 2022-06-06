import Image from "next/image"

export default function Card({ item }) {
    return (
        <>
            <a>
                <Image src={item.image} alt={item.title} width="200" height="200" />
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
                <button>Add to Cart</button>
            </a>
        </>
    )
}