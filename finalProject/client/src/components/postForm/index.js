import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import API from "../../utils/API";

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    
    handleInputChange = event => {
    
        const { name, value } = event.target;
        this.setState({ [name]: value });

        console.log(this.state);
      }
    
    handleFormSubmit = event => {
        event.preventDefault();

        API.savePosts({
            username: this.state.username,
            body: this.state.body,
            comments: this.state.comments
        })
        .then( (res) => console.log("form submit new post" + res.data ))
        .catch( (err) => console.log(err));
    }
    

    render() {
        return (
            <Container>
                <div className="posts">
                    <Form >
                        <Form.Group controlId="post">
                            <Form.Label> Post </Form.Label>
                            <Form.Control name="body" as="textarea" rows="2" />
                            <Button onClick={ this.handleFormSubmit }> Share </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        )
    }
}

export default PostForm;


