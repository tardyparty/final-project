import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import PostForm from "../components/postForm";
import PostList from "../components/postList";
import { Container } from "react-bootstrap";
import agent from "../utils/agent";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    posts: state.community.posts
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload) =>
        dispatch({ type: "COMMUNITY_LOADED", payload })
});

class Community extends Component {
    
    UNSAFE_componentWillMount() {
        this.props.onLoad( agent.Posts.all())
    };

    render() {
        return (
            <Container className="container-fluid">
                <Header />
                <Container>
                    <h3 className="text-center"> Community </h3>
                    <PostForm />
                    <Container>
                        <PostList posts={this.props.posts} />
                    </Container>
                </Container>
                <Footer />
            </Container>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Community);
