// Sidebar.js
import React,{ useState } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import { Contacts } from './Contact'
import { Conversations } from './Conversation'

const Sidebar = ({id}) => {
    const [activeKey, setActiveKey] = useState('contact')
  return (
    <div className="d-flex flex-column" style={{height:"100vh", width:"30vw", overflowY:"auto"}}>
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Nav variant="tabs" style={{dispaly:"flex", justifyContent:"space-around"}}>
                <Nav.Item>
                    <Nav.Link eventKey="contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="conversation">Conversation</Nav.Link>
                </Nav.Item>
            </Nav>

            <Tab.Content style={{borderRight: "1px solid #ccc",flexGrow:"1"}}>
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
        </Tab.Container>

    </div>
  );
};

export default Sidebar;
