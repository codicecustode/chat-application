import React, { useState,useRef, useEffect } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useConversation } from '../context/ConversationProvider'


export const OpenConversation = () => {
    const [text, setText] = useState('')
    const { sendMessage, selectedConversation } = useConversation()
    const lastMessageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        // logic to send message
        sendMessage(
            selectedConversation.recipients.map(r => r.id),
            text
        )
        setText('')
    }
    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    } , [selectedConversation.messages]);
    return (
        <div className="d-flex flex-column flex-grow-1" style={{ height: '100vh' }}>
            <div className="flex-grow-1 overflow-auto" style={{ height: 'calc(100vh - 150px)' }}>
                <div className="d-flex flex-column
                align-items-start justify-content-end px-3" style={{ minHeight: '100%' }}>

                    {
                        selectedConversation.messages.map((message, index) => {
                            return (
                                <div key={index} className={`mb-2 d-flex flex-column ${message.fromMe ? 'align-self-end':''}`}>
                                    <div className={`rounded px-2 py-1
                                            ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                                        {message.text}
                                    </div>
                                    <div className={`text-muted small ${message.fromMe ? 
                                        'text-right' : ''
                                    }`}>
                                        {message.fromMe ? 'you' : message.senderName}
                                    </div>
                                </div>
                            )
                        })
                        
                    }

                        <div ref={lastMessageRef} />

                </div>
            </div>

            <Form onSubmit={handleSubmit} style={{ width: '100%', overflow: 'hidden' }}>
                <Form.Group style={{ width: '100%' }}>
                    <InputGroup className="m-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Type a message..."
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                            style={{ height: '75px', resize: 'none',width: 'calc(100% - 80px)' }}
                        />
                        <Button type="submit" style={{ width: '80px' }}>Send</Button>
                    </InputGroup>
                </Form.Group>

            </Form>
        </div>
    )
}