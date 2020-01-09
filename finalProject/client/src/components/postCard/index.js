import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class PostCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.Post._ID,
            author: props.Post.username,
            message: props.Post.message,
            comments: props.Post.comments
        }
    }

    render() {
        return(
            <Card>
                <Card.Title>
                    { props.Post.username}
                </Card.Title>
                <Card.Body>
                    <h1>{ props.Post.message }</h1>
                    <Container>
                        {/* this needs to map each comment in the postDB props.Post.comments */}
                    </Container>
                </Card.Body>
            </Card>
        )
    }   
}

export default PostCard;