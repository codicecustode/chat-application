// Sidebar.js
import React,{ useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Sidebar = () => {
    const [activeKey, setActivekey] = useState('contact')
  return (
    <div className="flex-column" style={{height:"100vh", width:"100vw"}}>
        <Nav activeKey={activeKey} variant="tabs" >
            <Nav.Item>
                <Nav.Link onClick={()=>setActivekey('contact')} eventKey="contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>setActivekey('conversation')}eventKey="conversation" >Conversation</Nav.Link>
            </Nav.Item>
        </Nav>
    </div>
  );
};

export default Sidebar;
