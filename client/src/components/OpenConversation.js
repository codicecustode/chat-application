import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversation } from '../context/ConversationProvider'


export const OpenConversation = () => {
    const [text, setText] = useState('')
    const { sendMessage, selectedConversation } = useConversation()

    const handleSubmit = (e) => {
        e.preventDefault()
        // logic to send message
        sendMessage(
            selectedConversation.recipients.map(r => r.id),
            text
        )
        setText('')
    }
    return (
        <div className="d-flex flex-column flex-grow-1">
            <div className="flex-grow-1 overflow-auto"></div>

            <Form>
                <Form.Group onSubmit={handleSubmit}>
                    <InputGroup className="m-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Type a message..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                            style={{ height: '75px', resize: 'none' }}
                        />
                        <Button type="submit">Send</Button>
                    </InputGroup>
                </Form.Group>

            </Form>


        </div>
    )
}