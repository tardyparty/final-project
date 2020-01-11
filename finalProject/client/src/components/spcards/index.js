import React from 'react';
import './style.css';

class SPCards extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Basic Car Camper
                                                </h5>
                                    <img className="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_basic.jpeg" />
                                    <div className="card-block">


                                        <p className="card-text">
                                            For the Overnight Car Camper. This package includes the following:
							                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Glam/Party Camper
                                                </h5>
                                    <img className="card-img-top" alt="Bootstrap Thumbnail First" src="/images/SP_glam.jpeg" />
                                    <div className="card-block">


                                        <p className="card-text">
                                            For the Camper who enjoys comfort even more than they love the outdoors. This package included the follwoing:
							                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Couple Campers
							                </h5>
                                    <img className="card-img-top" alt="Bootstrap Thumbnail Second" src="/images/SP_couple.jpeg" />
                                    <div className="card-block">

                                        <p className="card-text">
                                            For the Camper couple or friends who just want to get away together. This package includes the following:
							                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="#">Rent Yours Today!</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Solo Camper
							                </h5>
                                    <img className="card-img-top" alt="Bootstrap Thumbnail Third" src="/images/SP_solo.jpeg" />
                                    <div className="card-block">

                                        <p className="card-text">
                                            For the Camper who is at one with nature. This package includes the following:
							                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="#">Rent Yours Today!</a>
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