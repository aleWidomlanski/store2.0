import { DataContext } from '../components/DataContext'
import { useContext, useEffect } from 'react'

export default function useDataFromLocal() {
    const { cart, setCart } = useContext(DataContext)

    useEffect(() => {
        const getCartLocal = localStorage?.getItem('itemCart')
        if (cart.length === 0 && getCartLocal) {
            const dataCartLocalParsed = JSON.parse(getCartLocal)
            setCart(dataCartLocalParsed);
        }
    }, [])
}