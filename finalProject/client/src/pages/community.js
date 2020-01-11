import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Nav";
import Footer from "../components/footer";
import PostForm from "../components/postForm";
import PostCard from "../components/postCard";
import PostList from "../components/postList";
import { Container, Form, Button } from "react-bootstrap";
import agent from "../utils/agent";
import { connect } from "react-redux";

const Promise = global.Promise;

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: "COMMUNITY_LOADED", payload })
});

class Community extends Component {
    
    componentWillMount() {
        this.props.onLoad( agent.Posts.all())
        
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 className="text-center"> Community </h1>
                    <PostForm />
                    <PostList posts={this.props.posts} />
                    <Footer />
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Community);
