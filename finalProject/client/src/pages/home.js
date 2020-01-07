import React, { Component } from "react";
import Header from "../components/Nav";
import Carousel from "../components/carousel";
import { Container, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";


class Home extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Carousel>
                    </Carousel>
                    <Container>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Card title
                                                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/HP_packages.jpeg" />
                                                <div class="card-block">


                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Rent a Package</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Card title
							                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail Second" src="/images/HP_spots.jpeg" />
                                                <div class="card-block">

                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Find Your Spot</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Card title
							                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail Third" src="/images/HP_camp.jpeg" />
                                                <div class="card-block">

                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Ready to Camp</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Footer>
                    </Footer>
                </Container>
            </Container>

        )
    }
}

export default Home;
