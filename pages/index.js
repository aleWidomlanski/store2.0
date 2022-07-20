
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import Cards from '../components/Cards'
import { getItemsBestSellers } from '../services/items'
import styles from '../styles/Home.module.css'
import useDataFromLocal from '../hooks/useDataFromLocal'


export default function Home({ items }) {
/* 

  useDataFromLocal()
*/

  return (
    <Layout title={'Home'}>
      <div className={styles.containerMenuCart}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.cart}>
          <Cart />
        </div>
      </div>
      <div className={styles.banner}></div>
      <h1>Más vendidos</h1>
      <Cards items={items} />
    </Layout>
  )
}

export async function getStaticProps() {
  const items = await getItemsBestSellers()

  return {
    props: {
        items
    }
}
}