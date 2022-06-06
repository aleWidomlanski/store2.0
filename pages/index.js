
import Layout from '../components/Layout'
import Menu from '../components/Menu'
import Cart from '../components/Cart'
import Cards from '../components/Cards'
import { getItem } from '../services/items'

export default function Home({items}) {
  return (
    <Layout>
      <Menu/>
      <Cart/>
      <Cards items={items}/>
    </Layout>
  )
}

export async function getStaticProps() {

  const items = await getItem()

  console.log(items)
  console.log("oooooa")

  return {
      props: {
          items
      }
  }
}