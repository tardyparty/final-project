import React from 'react';
import './style.css';

class HPCards extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Card title
                                                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail First" src="/images/HP_packages.jpeg" />
                                    <div class="card-block">


                                        <p class="card-text">
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="/store">Rent a Package</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Card title
							                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail Second" src="/images/HP_spots.jpeg" />
                                    <div class="card-block">

                                        <p class="card-text">
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="/search">Find Your Spot</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card border-light">
                                    <h5 class="card-title">
                                        Card title
							                </h5>
                                    <img class="card-img-top" alt="Bootstrap Thumbnail Third" src="/images/HP_camp.jpeg" />
                                    <div class="card-block">

                                        <p class="card-text">
                                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							                        </p>
                                        <p>
                                            <a class="btn btn-primary" href="#">Ready to Camp</a>
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

export default HPCards;
