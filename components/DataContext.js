import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [items, setItems] = useState([])

    return (
        <DataContext.Provider value={{ items }}>
            {children}
        </DataContext.Provider>
    )
}