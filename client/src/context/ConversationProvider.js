import React, { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { useContacts } from './ContactsProvider'
export const ConversationContext = createContext()

export const ConversationProvider = ({ children }) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
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

        return { ...conversation, recipients }
    })

    return (
        <ConversationContext.Provider value={{ conversations:formattedConversations, createConversation }}>
            {children}
        </ConversationContext.Provider>
    )
}

export const useConversation = () => {
    return useContext(ConversationContext)
}

