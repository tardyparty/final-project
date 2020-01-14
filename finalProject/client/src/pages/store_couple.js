import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import Spcouple from "../components/spcouple"
import { Container, Form, Button } from "react-bootstrap";

class Store_Couple extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <Spcouple>
                            
                        </Spcouple>
                        
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>
        )
    }
}

export default Store_Couple;