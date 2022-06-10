import Layout from '../../components/Layout'
import CartItems from '../../components/CartItems'
import Menu from '../../components/Menu'
import Cart from '../../components/Cart'
import styles from './CartPage.module.css'
import { useContext } from 'react'
import { DataContext } from '../../components/DataContext'

export default function CartPage() {

    const { cart } = useContext(DataContext)

    return (
        <Layout title={'Cart'}>
            <div className={styles.containerMenuCart}>
                <div className={styles.menu}>
                    <Menu />
                </div>
                <div className={styles.cart}>
                    <Cart />
                </div>
            </div>
            {cart.length > 0 ? cart.map((item) => {
                return (
                    <CartItems key={item.id} item={item} />
                )
            }) : <h3>No se añadieron productos al carrito</h3>}
        </Layout>
    )
}

