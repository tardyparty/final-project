import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import PostForm from "../components/postForm";
import PostList from "../components/postList";
import { Container } from "react-bootstrap";
import agent from "../utils/agent";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: "COMMUNITY_LOADED", payload })
})

class Community extends Component {
    
    UNSAFE_componentWillMount() {
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
