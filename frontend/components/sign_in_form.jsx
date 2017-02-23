import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/error_actions';
import { signIn } from '../actions/session_actions';
import AuthForm from './auth_form';

class SignInForm extends Component {

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    const { signIn, errors, clearErrors } = this.props;
    return (
      <section>
        <h1>Sign in to Tubeify</h1>
        <AuthForm
          submitText="Sign in"
          submitForm={ signIn }
          clearErrors={ clearErrors }
          errors={ errors }
        />
        <Link to="/users/new">Sign up instead</Link>
      </section>
    );
  }
}

function mapStateToProps({ errors }) {

  return { errors };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (user) => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
