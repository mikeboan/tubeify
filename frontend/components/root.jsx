import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { getCurrentUser } from '../actions/session_actions';
import Welcome from './welcome';
import App from './app';
import configureStore from '../store';
import SignInForm from './sign_in_form';
import SignUpForm from './sign_up_form';

export default function Root() {
  const preloadedState = window.currentUser ?
    { session: { currentUser: window.currentUser, errors: {} } } :
    {};

  delete window.currentUser;
  const store = configureStore(preloadedState);
  window.store = store;

  function redirectIfLoggedIn(nextState, replace) {
    if (store.getState().session.currentUser)
      replace('/');
  }

  function redirectUnlessLoggedIn(nextState, replace) {
    if (!store.getState().session.currentUser)
      replace('/session/new');
  }

  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Welcome } onEnter={ redirectUnlessLoggedIn }/>
          <Route
            path="session/new"
            component={ SignInForm }
            onEnter={ redirectIfLoggedIn }
          />
          <Route
            path="users/new"
            component={ SignUpForm }
            onEnter={ redirectIfLoggedIn }
          />
        </Route>
      </Router>
    </Provider>
  );
}
