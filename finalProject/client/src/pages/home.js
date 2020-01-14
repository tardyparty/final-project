import React, { Component } from "react";
import Header from "../components/Nav";
import Carousel from "../components/carousel";
import { Container, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";
import HPCards from "../components/hpcards";


class Home extends Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Carousel>
                    </Carousel>
                    <Container>
                        <HPCards>
                        </HPCards>
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>

        )
    }
}

export default Home;
