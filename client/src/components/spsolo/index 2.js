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
                        <img alt="Bootstrap Image Preview" src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg" />
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
                                <input type="email" class="form-control" id="exampleInputEmail1" />
                            </div>
                        </form>
                    </div>
                    <div class="col-md-3">
                    </div>
                </div>
            </div >
        );
    }
}

export default Solo;