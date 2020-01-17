import React from 'react';
import './style.css';

class Car extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h2>
                            Shopping Cart
				        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-1">
                    </div>
                    <div class="col-md-2">
                        <img id="sc-image" alt="Car Camper Preview" src="/images/SP_basic.jpeg" />
                        <ul>
                            <li class="list-item">
                                1 4 Person Tent
				                            </li>
                            <li class="list-item">
                                2 Sleeping Bags
				                            </li>
                            <li class="list-item">
                                2 Sleeping Pads
				                            </li>
                            <li class="list-item">
                                2 Camp Pillows
				                            </li>
                            <li class="list-item">
                                1 Camp Table
				                            </li>
                            <li class="list-item">
                                2 Camp Chairs
				                            </li>
                            <li class="list-item">
                                2 Rechargeable Headlamps
				                            </li>
                            <li class="list-item">
                                1 Electric Lantern
				                            </li>
                            <li class="list-item">
                                1 2-Burner Camp Stove (fuel sold separately)
				                            </li>
                            <li class="list-item">
                                1 Camp Cook Set
				                            </li>
                            <li class="list-item">
                                1 Cooler
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

export default Car;