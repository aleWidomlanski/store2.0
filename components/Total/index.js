
import { useContext } from "react";
import { DataContext } from "../DataContext";

export default function Total() {

    const { total } = useContext(DataContext)

    return (
        <h5>Total : ${total}</h5>
    )
}


