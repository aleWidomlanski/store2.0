import Card from '../Card'


export default function Cards({ items }) {
    return (
        <>
            {items && items.map((item) => {
                return (
                    <Card key={item.id} item={item} />
                )
            })}
        </>
    )
}

