/**
 * Created by thomashourlier on 2/26/17.
 */
import {ADD_JEDI, FETCH_FINISH} from '../actions/action';


export function jediReducer(state = { jedi : [] }, action) {
  switch (action.type) {
    case 'FETCH_FINISH':
      return {...state, jedi: action.list};
    case 'ADD_JEDI':
      return {...state, jedi: state.jedi.concat(action.list)};
    default:
      return state;
  }
}


