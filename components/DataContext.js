import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        const productFoundInCart = cart.find((e) => e.id === productToAdd.id)

        if (productFoundInCart) {
            const quantityUpdated = cart.map((e)=> {
                if(e.id === productFoundInCart.id) {
                    e.quantity  = productFoundInCart.quantity + 1
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

    console.log(cart)

    return (
        <DataContext.Provider value={{
            addToCart
        }}>
            {children}
        </DataContext.Provider>
    )
}