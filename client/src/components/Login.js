import React, { useRef } from "react"
import { Container, Form, Button } from 'react-bootstrap'

export const Login = () => {
    return (
       <Container style={{height:"100vh"}}>
        <Form className="w-100">
            <Form.Group>
                <Form.Label>enter id</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>
            <Button type="submit" className="mr-5">Login</Button>
            <Button variant="secondary">create a new id</Button>
        </Form>
       </Container>
    )
}



