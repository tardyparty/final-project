import React from 'react';
import './style.css';
import { Button, Form } from 'react-bootstrap';

class ContactUs extends React.Component {

    render() {
        return (


            <Form>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-3">
                        </div>
                        <div class="col-md-6">
                            <img id="contact-image" alt="Bootstrap Image Preview" src="/images/CP_1.jpeg" />
                            <p id="contact-text">Need help or more information or just want to let us know how were doing? Fill out the below information and we will be in touch!</p>
                            <div className="form-group">
                                <label for="firstName">First Name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="Enter your First Name"></input>
                                <label for="lastName">Last Name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="Enter your Last Name"></input>
                                <label for="emailAddress">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your Email Address"></input>
                                <label for="message">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                        <div class="col-md-3">
                        </div>
                    </div>
                </div>

            </Form>
        )
    }
}

export default ContactUs;

