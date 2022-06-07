import Image from "next/image"
import Link from 'next/link'

export default function Card({ item }) {
    return (
        <Link href={`http://localhost:3000/store/[id]`} as={`http://localhost:3000/store/${item.id}`}>
            <a>
                <Image src={item.image} alt={item.title} width="200" height="200" />
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
                <button>Add to Cart</button>
            </a>
        </Link>
    )
}