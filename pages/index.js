
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import Cards from '../components/Cards'
import { getItems } from '../services/items'
import Total from '../components/Total'

export default function Home({ items }) {
  return (
    <Layout title={'Home'}>
      <Menu />
      <Cart />
      <Total />
      <Cards items={items} />
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