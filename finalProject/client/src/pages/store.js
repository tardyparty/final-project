import React, { Component } from "react";
import Header from "../components/Nav";
import Footer from "../components/footer";
import { Container, Form, Button } from "react-bootstrap";



class Home extends React.Component {

    render() {
        return (
            <Container>
                <Header />
                <Container>
                    <Container>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Basic Car Camper
                                                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_basic.jpeg" />
                                                <div class="card-block">


                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Rent Yours Today!</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Glam/Party Camper
                                                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_glam.jpeg" />
                                                <div class="card-block">


                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Rent Yours Today!</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Couple Campers
							                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail Second" src="/images/SP_couple.jpeg" />
                                                <div class="card-block">

                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Rent Yours Today!</a> <a class="btn"></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="card">
                                                <h5 class="card-title">
                                                    Solo Camper
							                </h5>
                                                <img class="card-img-top" alt="Bootstrap Thumbnail Third" src="/images/SP_solo.jpeg" />
                                                <div class="card-block">

                                                    <p class="card-text">
                                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                                    <p>
                                                        <a class="btn btn-primary" href="#">Rent Yours Today!</a> <a class="btn"></a>
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