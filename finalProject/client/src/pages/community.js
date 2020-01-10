import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Nav";
import Footer from "../components/footer";
import PostForm from "../components/postForm";
import PostCard from "../components/postCard";
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
            .then( (res) => this.setState({ posts: res.data }))
            .catch( (err) => console.log(err));
        
        console.log("load posts", this.state.posts);
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 className="text-center"> Community </h1>
                    <PostForm />
                    {this.state.posts.map( post => {
                        return (
                            <PostCard
                                id={ post._ID }
                                username={ post.username }
                                body={ post.body }
                                comments={ post.comments }
                            />
                        )
                    })}
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default Community;

