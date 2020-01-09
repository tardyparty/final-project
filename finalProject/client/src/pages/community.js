import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import Post from "../components/postForm";
import Comment from "../components/comment";
import { Container, Form, Button } from "react-bootstrap";

class Community extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Post
                        ID={ID}
                        author={author}
                        message={message}
                        ccomments={comments}
                    />
                    <Comment comments={this.state.comments}/>
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default Community;

