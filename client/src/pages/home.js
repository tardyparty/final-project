import React from "react";
import Header from "../components/Nav";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import HPCards from "../components/hpcards";
import SlideShow from "../components/carousel"


class Home extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <SlideShow>
                    </SlideShow>
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
