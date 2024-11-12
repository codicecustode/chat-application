import React, { useRef } from 'react'
import { useModelShow } from '../context/ModelShowContext';
import { useContacts } from '../context/ContactsProvider';
export const NewContact = ({setShowConversation}) => {

    setShowConversation(false)

    const nameRef = useRef();
    const idRef = useRef();

    const { handleHide } = useModelShow();
    const { createContact } = useContacts();

    const handleSubmit = (e) => {
        e.preventDefault();
        createContact(idRef.current.value, nameRef.current.value);
        handleHide()
    }

    return (
        <div className="new-contact" >
            <form onSubmit={handleSubmit}>
                <h3>Create New Entry</h3>
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" name="name" ref={nameRef} required placeholder="Enter your name" />
                </label>
                <br />
                <label htmlFor="id">
                    ID:
                    <input type="text" id="id" name="id" ref={idRef} required placeholder="Enter your ID" />
                </label>
                <br />
                <button type="submit">Create Contact</button>
                <button type="button" onClick={handleHide}>Close</button>
            </form>
        </div>
    )

}