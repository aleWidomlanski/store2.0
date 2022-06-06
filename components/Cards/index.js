import Card from '../Card'
import Link from 'next/link'

export default function Cards({ items }) {
    return (
        <>
                {items && items.map((item) => {
                    return ( 
                    <Link href={`http://localhost:3000/store`} /* as={`http://localhost:3000/store/${item.id}`} */>
                            <Card key={item.id} item={item}/>
                    </Link>
                    )
                })}
        </>
    )
}

