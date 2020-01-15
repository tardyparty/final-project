import React from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import Spglam from "../components/spglam"
import { Container } from "react-bootstrap";

class Store_Glam extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <Spglam>
                            
                        </Spglam>
                        
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>
        )
    }
}

export default Store_Glam;