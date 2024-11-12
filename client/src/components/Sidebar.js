// Sidebar.js
import React, { useState, useLayoutEffect } from 'react'
import { Nav, Tab, Button } from 'react-bootstrap'
import { Contacts } from './Contact'
import { NewContact } from './contactModel'
import { NewConversation } from './ConversationModel'
import { Conversations } from './Conversation'
import { useModelShow } from '../context/ModelShowContext'



const Sidebar = ({ id, setShowConversation }) => {
    const [activeKey, setActiveKey] = useState('contact')
    const { show, handleShow, handleHide } = useModelShow();
    const newConversationOpen = activeKey === 'conversation'
    
    useLayoutEffect(() => {
        handleHide()
    }, [activeKey])
    return (
        <>
            <div className="d-flex flex-column" style={{ height: "100vh", width: "30vw", overflowY: "auto" }}>
                <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
                    <Nav variant="tabs" style={{ display: "flex", justifyContent: "space-around" }}>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="conversation">Conversation</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content style={{ borderRight: "1px solid #ccc", flexGrow: "1" }}>
                        <Tab.Pane eventKey="contact">
                            <Contacts />
                        </Tab.Pane>
                        <Tab.Pane eventKey="conversation">
                            <Conversations />
                        </Tab.Pane>
                    </Tab.Content>

                    <div style={{ borderTop: '1px solid #ccc', borderRight: '1px solid #ccc' }}>
                        console.log(id)
                        Your is : {id.id}
                    </div>

                    <Button style={{ borderRadius: '0' }} onClick={ handleShow }>
                        New {newConversationOpen ? 'Conversation' : 'Contact'}
                    </Button>
                </Tab.Container>

            </div>
            { show && <div style={{ height: "100vh", width: "60vw", marginLeft: "10vw" }}>
                {newConversationOpen ? <NewConversation setShowConversation={setShowConversation} /> : <NewContact setShowConversation={setShowConversation}/>}
            </div> }

        </>
    );
};

export default Sidebar;
