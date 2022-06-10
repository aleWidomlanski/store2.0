
import Layout from "../../components/Layout"
import Menu from "../../components/Menu"
import Cart from "../../components/Cart"
import Cards from "../../components/Cards"
import { getItems } from "../../services/items"
import styles from '../products/Products.module.css'


export default function Products({ items }) {
    return (
        <Layout title={'Productos'}>
            <div className={styles.containerMenuCart}>
                <div className={styles.menu}>
                    <Menu />
                </div>
                <div className={styles.cart}>
                    <Cart />
                </div>
            </div>
            <h1>Productos</h1>
            <Cards  items={items} />
        </Layout>
    )
}

export async function getStaticProps() {
    const items = await getItems()

    return {
        props: {
            items
        }
    }
}