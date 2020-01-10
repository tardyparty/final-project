import React, { Component } from "react";
import API from "../utils/API";
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

    componentWillMount() {
        this.loadPosts();
    }
    
    loadPosts = () => {
        API.getPosts()
            .then( res => this.setState({ posts: res.data }))
            .catch( err => console.log(err))
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <Post />
                    {this.state.posts.map( post => {
                        return (
                            <PostCard
                                ID={post.ID}
                                author={post.author}
                                message={post.message}
                                comments={post.comments}
                            />
                        )
                    })}
                    <Comment comments={this.state.comments}/>
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default Community;

