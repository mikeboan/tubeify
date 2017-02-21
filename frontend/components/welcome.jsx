import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignoutButton from './sign_out_button';

class Welcome extends React.Component {
  componentWillReceiveProps(newProps) {
    debugger
    if (!newProps.currentUser) this.props.router.push('/session/new');
  }

  render() {
    const { currentUser } = this.props;
    if (!currentUser) return null;
    return (
      <div>
        <h1>
          Welcome, {currentUser.username}!
        </h1>
        <SignoutButton />
      </div>
    );
  }
}

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(mapStateToProps, null)(withRouter(Welcome));
