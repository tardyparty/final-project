import React from 'react';
import './style.css';

class SPCards extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-3 text-center">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Basic Car Camper
                                                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_basic.jpeg" />
                                    <div class="card-block">


                                        <p class="card-text">
                                            For the Overnight Car Camper. This package includes the following:
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Glam/Party Camper
                                                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_glam.jpeg" />
                                    <div class="card-block">


                                        <p class="card-text">
                                            For the Camper who enjoys comfort even more than they love the outdoors. This package included the follwoing:
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Couple Campers
							                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail Second" src="/images/SP_couple.jpeg" />
                                    <div class="card-block">

                                        <p class="card-text">
                                            For the Camper couple or friends who just want to get away together. This package includes the following:
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Solo Camper
							                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail Third" src="/images/SP_solo.jpeg" />
                                    <div class="card-block">

                                        <p class="card-text">
                                            For the Camper who is at one with nature. This package includes the following:
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SPCards;