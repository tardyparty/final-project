import React, { Component } from "react";
import Header from "../components/Nav";
import { Container, Form, Button } from "react-bootstrap";

class Blog extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark fixed-bottom">
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default Blog;