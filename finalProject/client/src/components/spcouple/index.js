import React from 'react';
import './style.css';

class Couple extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="jumbotron">
                            <h2>
                                Shopping Cart
				            </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <img id="sc-image" alt="Couple Camper Preview" src="/images/SP_couple.jpeg" />
                        <ul>
                            <li class="list-item">
                                1 The North Face Talus 4 Person Tent
				                            </li>
                            <li class="list-item">
                                1 The North Face Dolomite Double Sleeping Bag (20 Degree)
				                            </li>
                            <li class="list-item">
                                1 Exped Sim Comfort Duo Sleeping Pad
				                            </li>
                            <li class="list-item">
                                1 Electric Lantern
				                            </li>
                            <li class="list-item">
                                1 Jetboil 2-Burner Camp Stove (fuel sold separately)
				                            </li>
                            <li class="list-item">
                                1 Hiker or Backpacker Cookware for 2
				                            </li>
                            <li class="list-item">
                                1 Camp Table
				                            </li>
                            <li class="list-item">
                                2 Camp Chairs
				                            </li>
                            <li class="list-item">
                                1 Cooler
				                            </li>
                            <li class="list-item">
                                2 LED Flashlight/Lanterns
				                            </li>
                        </ul>
                        <form role="form">
                            <div class="form-group">

                                <label for="package-price">
                                    Package Price
					            </label>
                                <input className="form-control" type="text" id="package-price" readOnly />
                            </div>
                        </form>
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <form role="form">
                            <div class="form-group">
                                <label for="total">
                                    Total
					            </label>
                                <input type="text" class="form-control" id="package-total" readOnly />
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-9">
                    </div>
                    <div class="col-md-3">
                        <button type="button" className="btn btn-success">
                            COMPLETE TRANSACTION
					    </button>
                    </div>
                </div>
            </div >
        );
    }
}

export default Couple;