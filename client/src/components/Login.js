import React, { useRef } from "react"
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export const Login = ({ onSubmitId }) => {
    const idRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()
        onSubmitId(idRef.current.value)
        console.log(idRef.current.value)
    }

    function createNewId() {
        onSubmitId(uuidV4())
    }
    return (
        <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>enter id</Form.Label>
                    <Form.Control ref={idRef} type="text" placeholder="Enter email" />
                </Form.Group>
                <Button type="submit" className="mr-5">Login</Button>
                <Button onClick={createNewId} variant="secondary">create a new id</Button>
            </Form>
        </Container>
    )
}



