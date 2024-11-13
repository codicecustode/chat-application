import React, { useContext, useState, useEffect } from 'react'
import io from 'socket.io-client'

const SocketContext = React.createContext()


export const SocketProvider = ({ id, children }) => {
    const [socket, setSocket] = useState()

    useEffect(() => {
        const newSocket = io('http://localhost:5000', { query: { id } })
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )

}

export const useSocket = () => {
    const socket = useContext(SocketContext)
    if (!socket) {
        throw new Error('useSocket must be used within a SocketProvider')
    }
    return socket
}