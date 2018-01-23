/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {jediReducer} from './reducers/reducer';

export default createStore(jediReducer, applyMiddleware(thunk));
