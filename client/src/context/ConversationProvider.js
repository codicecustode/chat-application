import React, { createContext, useContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

import { useContacts } from './ContactsProvider'
export const ConversationContext = createContext()

export const ConversationProvider = ({ id, children }) => {
    const [conversations, setConversations] = useLocalStorage('conversations', [])
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const { contacts } = useContacts()

    const createConversation = (recipients) => {
        setConversations(prevConversation => {
            return [...prevConversation, { recipients, messages: [] }]
        })
    }

    const addMessageToConversation = ({ recipients, text, sender }) => {
        setConversations(prevConversation => {
            let madeChange = false
            const newMessage = { sender, text }
            const newConversations = prevConversation.map(conversation => {
                if (arrayEquality(conversation.recipients, recipients)) {
                    madeChange = true
                    return {
                        ...conversation,
                        messages: [...conversation.messages, newMessage]
                    }
                }

                return conversation
            })

            if (madeChange) {
                return newConversations
            } else {
                return [
                    ...prevConversation,
                    { recipients, messages: [newMessage] }
                ]
            }
        })


    }

    const sendMessage = (recipients, text) => {
        addMessageToConversation({ recipients, text, sender: id })
    }


    const formattedConversations = conversations.map((conversation, index) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient
            })
            const name = (contact && contact.name) || recipient
            return { id: recipient, name }
        })

        const messages = conversation.messages.map(message => {
            const sender = contacts.find(contact => contact.id === message.sender)
            const name = (sender && sender.name) || message.sender
            const fromMe = id === message.sender
            return { ...message, senderName: name, fromMe }
        })


        const selected = index === selectedConversationIndex

        return { ...conversation, recipients, selected, messages }
    })

    return (
        <ConversationContext.Provider value={{
            conversations: formattedConversations,
            selectedConversation: formattedConversations[selectedConversationIndex],
            selectConversationIndex: setSelectedConversationIndex,
            sendMessage,
            createConversation
        }}>
            {children}
        </ConversationContext.Provider>
    )
}

const arrayEquality = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
    }
    return true
}

export const useConversation = () => {
    return useContext(ConversationContext)
}

