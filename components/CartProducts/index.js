import Image from "next/image";

export default function CartProducts() {
    return (
        <div className={styles.container}>
            <a>
                <Image src={item.image} alt={item.title} width="100" height="100" />
                <h4>{item.title}</h4>
                <h3>$ {item.price}</h3>
            </a>
        </div>
    )
}

