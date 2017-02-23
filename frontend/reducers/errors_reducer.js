import { RECEIVE_ERRORS } from '../actions/error_actions';

export default function sessionReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign({}, state, action.errors);
    default:
      return state;
  }
}
