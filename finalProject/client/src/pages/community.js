import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import { Container, Form, Button } from "react-bootstrap";
import Social from "../components/social";

class Community extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Social>

                    </Social>
                </Container>
                <Footer>
                </Footer>
            </Container>
        )
    }
}

export default Community;