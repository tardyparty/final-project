import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import agent from "../../utils/agent";
import { connect } from "react-redux";

const mapStateToProps = state => ({ ...state.post });

const mapDispatchToProps = dispatch => ({
  onChangeBody: value =>
    dispatch({ type: 'UPDATE_FIELD_POST', key: 'body', value }),
  onSubmit: (body) => {
    const payload = agent.Posts.newPost(body);
    console.log("POST_POST", payload);
    dispatch({ type: 'POST_POST', payload })
  }
});

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.changeBody = event => this.props.onChangeBody(event.target.value);
        this.submitForm = (body) => event => {
            event.preventDefault();
            this.props.onSubmit(body);
        }
    }

    render() {
        const { body } = this.props;

        return (
            <Container>
                <div className="posts">
                    <form onSubmit={ this.submitForm(body) } className="text-center">
                        <fieldset>
                            <fieldset className="form-group">
                                <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="What's on your mind?"
                                value={this.props.body}
                                onChange={this.changeBody} />
                            </fieldset>

                            <button
                                className="btn btn-lg btn-primary pull-xs-right"
                                type="submit"
                                disabled={this.props.inProgress}>
                                Share
                            </button>
                        </fieldset>
                    </form>
                </div>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);


