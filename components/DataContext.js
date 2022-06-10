import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        const productFoundInCart = cart.find((e) => e.id === productToAdd.id)

        if (productFoundInCart) {
            const quantityUpdated = cart.map((e) => {
                if (e.id === productFoundInCart.id) {
                    e.quantity = productFoundInCart.quantity + 1
                }
                return e
            })
            setCart(quantityUpdated)
        } else {
            const productAdd = {
                ...productToAdd,
                quantity: 1
            }
            setCart([...cart, productAdd])
        }
    }

    const quantityProductCart = cart.reduce((previus, current) => {
        return previus + current.quantity;
    }, 0)

    const total = cart.reduce((previus, current) => {
        return previus + (current.quantity * current.price);
    }, 0)





    return (
        <DataContext.Provider value={{
            cart,
            addToCart,
            quantityProductCart,
            total,
        }}>
            {children}
        </DataContext.Provider>
    )
}