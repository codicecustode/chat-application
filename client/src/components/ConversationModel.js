import React, { useState } from 'react'
import { Modal, Button, Form, Alert } from 'react-bootstrap'
import { useContacts } from '../context/ContactsProvider';
import { useConversation } from '../context/ConversationProvider';
export const NewConversation = ({ setShowConversation }) => {

    //setShowConversation(false)
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const { contacts } = useContacts()
    const [error, setError] = useState(null);
    const { createConversation } = useConversation()

    const handleCheckBoxChange = (contactId) => {
        if (selectedContactIds.includes(contactId)) {
            setSelectedContactIds(selectedContactIds.filter(id => id !== contactId))
        } else {
            setSelectedContactIds([...selectedContactIds, contactId])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // logic to create conversation
        if (selectedContactIds.length === 0) {
            setError("Please select at least one contact to create a conversation.");
            return;
        }

        setError(null);
        setShowConversation(true)
        createConversation(selectedContactIds)
    }


    return (
        <>
            <Modal.Header>Create Conversation</Modal.Header>
            {error && <Alert variant="danger">{error}</Alert>}
            <Modal.Body>

                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckBoxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}

                    <Button type="submit">Create</Button>

                </Form>

            </Modal.Body>
        </>

    )
}
