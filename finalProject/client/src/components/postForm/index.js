import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import agent from "../../utils/agent";
import { connect } from "react-redux";
import ListErrors from "../listErrors";

const mapStateToProps = state => ({ ...state.post });

const mapDispatchToProps = dispatch => ({
    onUpdateField: (key, value) =>
        dispatch({ type: 'UPDATE_FIELD_POST', key, value }),
    onSubmit: payload => {
        dispatch({ type: 'CREATE_POST', payload })
    }
});

class PostForm extends Component {
    constructor(props) {
        super(props);
        const updateFieldEvent =
            key => ev => this.props.onUpdateField(key, ev.target.value);
        this.changeBody = updateFieldEvent('body');
        this.submitForm = () => {
            // ev.preventDefault();

            const post = {
                body: this.props.body
            };

            const promise = agent.Posts.create(post);

            this.props.onSubmit(promise)
        }
    }

    render() {
        // const { body } = this.props;

        return (
            <Container>
                <div className="posts">
                <ListErrors errors={this.props.errors}></ListErrors>
                    <form className="text-center">
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
                                disabled={this.props.inProgress}
                                onClick={ this.submitForm}>
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


