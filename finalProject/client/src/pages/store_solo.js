import React from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import Spsolo from "../components/spsolo"
import { Container } from "react-bootstrap";

class Store_Solo extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <Spsolo>
                            
                        </Spsolo>
                        
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>
        )
    }
}

export default Store_Solo;