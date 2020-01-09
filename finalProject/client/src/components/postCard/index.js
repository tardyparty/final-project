import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";

class PostCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.ID,
            author: props.username,
            message: props.message,
            comments: [ props.comments ]
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
                        {this.state.comments.map( comment => {
                            <div>
                                {comment}
                            </div>
                        })}
                    </Container>
                </Card.Body>
            </Card>
        )
    }   
}

export default PostCard;