import React from 'react';
import { connect } from 'react-redux';
import Header from "../components/Nav";
import Footer from "../components/footer";
import { Container } from "react-bootstrap";
import ListErrors from "../components/listErrors";
import agent from "../utils/agent";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
 onSubmit: (email, password) =>
  dispatch({ type: 'LOGIN', payload: agent.Auth.login(email, password) })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = event => this.props.onChangeEmail(event.target.value);
    this.changePassword = event => this.props.onChangePassword(event.target.value);
    this.submitForm = (email, password) => event => {
      event.preventDefault();
      this.props.onSubmit(email, password);
    }
  };


  render() {
    const { email, password } = this.props;

    return (
      <Container>
      <Header />
      <div className="auth-page container-fluid">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h3 className="text-xs-center text-center">
                <a href="/register">
                  Need an account? Register Here
                </a>
              </h3>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)} className="text-center">
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);