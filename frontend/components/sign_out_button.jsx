import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { signOut } from '../actions/session_actions';

class SignOutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.signOut().then(
      () => this.props.router.push('/session/new')
    );
  }

  render() {
    return (
      <div onClick={this.handleSignOut}>
        Sign Out
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default withRouter(connect(null, mapDispatchToProps)(SignOutButton));
