import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class PostCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            username: props.username,
            body: props.body,
            comments: [ props.comments ]
        }
    }

    render() {
        return(
            <Card>
                <Card.Title>
                    { this.state.username }
                </Card.Title>
                <Card.Body>
                    <h1>{ this.state.body }</h1>
                    <Container>
                        { this.state.comments.map( comment => {
                            return (
                                <div>
                                    <h2> { comment.username } </h2>
                                    <p> { comment.comment } </p>
                                </div>
                            )}
                        )}
                    </Container>
                </Card.Body>
            </Card>
        )
    }   
}

export default PostCard;