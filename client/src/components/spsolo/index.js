import React from 'react';
import './style.css';

class Solo extends React.Component {
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
                        <img id="sc-image" alt="Solo Camper Preview" src="/images/SP_solo.jpeg" />
                        <ul>
                            <li class="list-item">
                                1 2-Person Lightweight Backpacking Tent
				                            </li>
                            <li class="list-item">
                                1 Lightweight Backpack
				                            </li>
                            <li class="list-item">
                                1 Lightweight Sleeping Bag
				                            </li>
                            <li class="list-item">
                                1 Lightweight Backpacking Sleeping Pad
				                            </li>
                            <li class="list-item">
                                1 Backpacking Pillow
				                            </li>
                            <li class="list-item">
                                1 Lightweight Camp Chair
				                            </li>
                            <li class="list-item">
                                1 Pair of Carbon Trekking Poles
				                            </li>
                            <li class="list-item">
                                1 Rechargeable Headlamps
				                            </li>
                            <li class="list-item">
                                1 MSR Pocket Rocket Stove Kit (fuel sold separately)
				                            </li>
                            <li class="list-item">
                                1 Gravity Water Filter
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

export default Solo;