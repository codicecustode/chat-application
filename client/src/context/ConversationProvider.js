import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { useContacts } from './ContactsProvider'
export const ConversationContext = createContext()

export const ConversationProvider = ({ children }) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const { contacts } = useContacts()
    const createConversation = (recipients) => {
        setConversations(prevConversation => {
            return [...prevConversation, { recipients, messages: [] }]
        })
    }

    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return { id: recipient, name }
        })

        const selected = index === selectedConversationIndex

        return { ...conversation, recipients, selected }
    })

    return (
        <ConversationContext.Provider value={{ 
            conversations:formattedConversations, 
            selectConversationIndex: formattedConversations[setSelectedConversationIndex],
            selectConversationIndex: setSelectedConversationIndex,
            createConversation
        }}>
            {children}
        </ConversationContext.Provider>
    )
}

export const useConversation = () => {
    return useContext(ConversationContext)
}

