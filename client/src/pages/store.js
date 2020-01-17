import React from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import SPCards from "../components/spcards"
import { Container } from "react-bootstrap";



class Home extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <SPCards>
                        </SPCards>
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>
        )
    }
}

export default Home;