import React from 'react';
import './style.css';

class HPCards extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Find Your Adventure
                                                </h5>
                                    <img className="hp_image text-center" alt="Bootstrap Thumbnail First" src="/images/HP_packages.jpeg" />
                                    <div className="card-block">


                                        <p className="card-text">
                                            We make camping easy again with pre-packaged
                                        <p>
                                            gear based on your needs! 
							            </p>
                                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="/store">RENT A PACKAGE</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Find Your Spot
							                </h5>
                                    <img className="hp_image text-center" alt="Bootstrap Thumbnail Second" src="/images/HP_spots.jpeg" />
                                    <div className="card-block">

                                        <p className="card-text">
                                            Search for campgrounds near your area or
                                        <p>
                                            find your next getaway!
                                        </p>
                                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="/search">CAMPSITE SEARCH</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="card border-light">
                                    <h5 className="card-title">
                                        Find Campers Experiences
							                </h5>
                                    <img className="hp_image text-center" alt="Bootstrap Thumbnail Third" src="/images/HP_camp.jpeg" />
                                    <div className="card-block">

                                        <p className="card-text">
                                            Read and share a recent camping experience 
                                        
                                        <p>
                                            and connect with our community!
							            </p>
                                        </p>
                                        <p>
                                            <a className="btn btn-primary" href="/community">COMMUNITY</a>
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
