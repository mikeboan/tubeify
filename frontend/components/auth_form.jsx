import React, { Component } from 'react';
import { withRouter, hashHistory } from 'react-router';

import ErrorIndex from './error_index';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (this.props.formType !== newProps.formType) this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.props.submitForm(Object.assign({}, this.state))
      .then(() => this.props.router.push('/'));
      // .then(() => hashHistory.push('/'))
  }

  render() {
    const { errors } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>

        <ErrorIndex errors={ errors.auth ? errors.auth : [] } />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={ this.update("username")}
          value={ this.state.username }
          />

        <ErrorIndex errors={ errors.username ? errors.username : [] } />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={ this.update("password")}
          value={ this.state.password}
          />

        <ErrorIndex errors={ errors.password ? errors.password : [] } />

        <button>{ this.props.submitText }</button>
      </form>
    );
  }

}

export default withRouter(AuthForm);
