import React from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import Spcar from "../components/spcar"
import { Container } from "react-bootstrap";

class Store_Car extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <Spcar>
                            
                        </Spcar>
                        
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>
        )
    }
}

export default Store_Car;