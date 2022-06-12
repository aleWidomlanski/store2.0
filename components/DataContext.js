import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        const productFoundInCart = cart.find((e) => e.id === productToAdd.id)
        if (productFoundInCart) {
            const quantityUpdated = cart.map((e) => {
                if (e.id === productFoundInCart.id) {
                    e.quantity = e.quantity + 1
                }
                return e
            })
            localStorage.setItem('itemCart', JSON.stringify(quantityUpdated))
            setCart(quantityUpdated)
        } else {
            const productAdd = {
                ...productToAdd,
                quantity: 1
            }

            const dataToJson = JSON.stringify([...cart, productAdd])
            localStorage.setItem('itemCart', dataToJson)
            setCart([...cart, productAdd])
        }
    }

    const addToQuantityProduct = (productQuantityChanged) => {
        const productFoundInCart = cart.find((e) => e.id === productQuantityChanged.id)

        const quantityUpdated = cart.map((e) => {
            if (e.id === productFoundInCart.id) {
                e.quantity = e.quantity + 1
            }
            return e
        })
        setCart(quantityUpdated)

    }

    const subtractToQuantityProduct = (productQuantityChanged) => {
        const productFoundInCart = cart.find((e) => e.id === productQuantityChanged.id)

        const quantityUpdated = cart.map((e) => {
            if (e.id === productFoundInCart.id) {
                e.quantity = e.quantity - 1
            }
            return e
        })
        setCart(quantityUpdated)

    }

    const deleteProduct = (productToRemove) => {
        const productFoundInCart = cart.find((e) => e.id === productToRemove.id)

        const cartUpdated = cart.filter((e) => {
            return e.id !== productFoundInCart.id
        })

        localStorage.setItem('itemCart', JSON.stringify(cartUpdated))
        setCart(cartUpdated)

    }

    const quantityProductCart = cart.reduce((previus, current) => {
        return previus + current.quantity;
    }, 0)

    const quantityProductItem = cart.reduce((previus, current) => {
        return previus + current.quantity;
    }, 0)

    const total = cart.reduce((previus, current) => {
        return previus + (current.quantity * current.price);
    }, 0)





    return (
        <DataContext.Provider value={{
            cart,
            setCart,
            addToCart,
            quantityProductCart,
            total,
            quantityProductItem,
            addToQuantityProduct,
            subtractToQuantityProduct,
            deleteProduct,
        }}>
            {children}
        </DataContext.Provider>
    )
}