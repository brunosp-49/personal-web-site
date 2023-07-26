import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({});

export const GlobalStateProvider = (props) => {
    const [color, setColor] = useState({
        home: "#fff",
        portfolio: "#E91472",
        about: "#2291EB",
        contact: "#A72D84",
        social: "#01B9E6"
    })
    return (
        <GlobalContext.Provider value = {{color, setColor}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useColor = () => useContext(GlobalContext);

