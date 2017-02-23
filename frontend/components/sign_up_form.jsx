import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/error_actions';
import { signUp } from '../actions/session_actions';
import AuthForm from './auth_form';

class SignUpForm extends Component {

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    const { signUp, errors, clearErrors } = this.props;
    return (
      <section>
        <h1>Sign up for Tubeify</h1>
        <AuthForm
          submitText="Sign up"
          submitForm={ signUp }
          errors={ errors }
          clearErrors={ clearErrors }
        />
        <Link to="/session/new">Sign in instead</Link>
      </section>
    );
  }
}

function mapStateToProps({ errors }) {
  return { errors };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
