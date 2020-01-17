import React from 'react';
import './style.css';

class Social extends React.Component {

    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="Bootstrap Image Preview" src="/images/community_children.jpeg" />
                                <h4>Best Daddy Ever</h4>
                            </div>
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-7">
                                <p id="community-text">
                                    Do not and I repeat, do not tell your kids ghost stories while camping. Our kids refused to sleep in the tent with everyone else and would only sleep in the car for the rest of the trip.
                                </p>
                            </div>
                            <div className="col-md-2">
                                <button type="button" className="btn btn-success">
                                    Share Your Experience
					            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="Bootstrap Image Preview" src="/images/community_connect_nature.jpeg" />
                                <h4>Reconnected Camper</h4>
                            </div>
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-7">
                                <p id="community-text">
                                    There is something about disconnecting from everything and reconnecting with nature. My obligations keep me way too busy but when I do get out here it feels like home.
                                </p>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="Bootstrap Image Preview" src="/images/community_toilet_paper.jpeg" />
                                <h4>TP Bandit</h4>
                            </div>
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-7">
                                <p id="community-text">
                                    Imagine an entire group of “EXPERIENCED” campers and no one remembered to walk with toilet paper……………………. Let’s just say everyone got really INVENTIVE for our three-day trip lol lol lol
                                </p>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <img alt="Bootstrap Image Preview" src="/images/community_wine_friends.jpeg" />
                                <h4>Wine Girls</h4>
                            </div>
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-7">
                                <p id="community-text">
                                    We may not be your average camper but with this glamping set up we will go again and again, glamping + good friends + wine = a good time!
                                </p>
                            </div>
                            <div className="col-md-2">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10">
                    </div>
                    <div class="col-md-2">
                        <button type="button" className="btn btn-success">
                            Share Your Experience
					    </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default Social;