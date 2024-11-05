import React, { useState, createContext, useContext } from 'react'

export const ModelShowContext = createContext()

export const ModelShowProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);

    return (
        <ModelShowContext.Provider value={{ show, handleShow, handleHide  }}>
            {children}
        </ModelShowContext.Provider>
    )
}

export const useModelShow = () => {
    return useContext(ModelShowContext)
}