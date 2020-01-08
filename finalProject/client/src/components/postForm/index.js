import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Post extends Component {

    render() {
        return (
            <Container>
                <div className="title text-center">
                    <h2> Camping Community </h2>
                </div>
                <div className="posts">
                    <Form >
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> Post </Form.Label>
                            <Form.Control as="textarea" rows="2" />
                            <Button> Post </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        )
    }
}

export default Post;


