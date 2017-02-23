import * as SessionAPIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export function receiveCurrentUser(currentUser) {
  return { type: RECEIVE_CURRENT_USER, currentUser };
}

export function signIn(user) {
  return (dispatch) => {
    return SessionAPIUtil.signIn(user).then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
}

export function signUp(user) {
  return (dispatch) => {
    return SessionAPIUtil.signUp(user).then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
}

export function signOut() {
  return (dispatch) => {
    return SessionAPIUtil.signOut().then(
      () => dispatch(receiveCurrentUser(null))
    );
  };
}

export function getCurrentUser() {
  return (dispatch) => {
    return SessionAPIUtil.getCurrentUser().then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
}
