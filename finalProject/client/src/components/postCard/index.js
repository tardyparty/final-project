import React from "react";
import "./style.css";
import { Card, Container } from "react-bootstrap";

const PostCard = props => {

    const post = props.post;

    return (
        <Card>
            <Card.Title>
                {/* { post.author.username } */}
                <span className="date">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </Card.Title>
            <Card.Body>
                <h1>{ post.body }</h1>
                <Container>
                    { post.comments.map( comment => {
                        return (
                            <div>
                                <h2> { comment.author.username } </h2>
                                <p> { comment.body } </p>
                                <span className="date">
                                    {new Date(comment.createdAt).toDateString()}
                                </span>
                            </div>
                        )}
                    )}
                </Container>
            </Card.Body>
        </Card>
    )
}   


export default PostCard;