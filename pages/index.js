import React, { createContext, useState } from 'react'
import Homepage from './homepage'
import Treatments from './treatments';
export const Context = createContext();

const Index = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Context.Provider value={{
            menuOpen, setMenuOpen
        }}>
            <Homepage />
            {/* <Treatments /> */}
        </Context.Provider>
    )
}

export default Index