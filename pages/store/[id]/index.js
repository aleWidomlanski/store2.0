import { getItemsId } from "../../../services/items";

export default function Detail() {
    return (
        <h1>Detail</h1>
    )
}

export async function getStaticPaths() {
    const ids = await getItemsId()

    return {
        paths: [
            { params: ids }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }) {

    const items = await getItems()

    console.log(params)

    return {
        props: {
            items
        }
    }
}