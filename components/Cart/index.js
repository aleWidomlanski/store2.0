import { useContext } from "react";
import { DataContext } from "../DataContext";

export default function Cart() {

    const { quantityProductCart, handleOpenCart } = useContext(DataContext)

    return (
        <button onClick={handleOpenCart}>Cart({quantityProductCart})</button>
    )
}


