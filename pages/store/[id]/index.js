import { getItemsParamsId, getItem } from "../../../services/items";
import Layout from "../../../components/Layout"
import Menu from "../../../components/Menu";
import Cart from "../../../components/Cart";
import Detail from "../../../components/Detail";

export default function DetailPage({ item }) {
    return (
        <Layout title={'Detail'}>
            <Menu />
            <Cart />
            <Detail item={item} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const ids = await getItemsParamsId()

    return {
        paths: ids,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const item = await getItem(params.id)

    return {
        props: {
            item
        }
    }
}