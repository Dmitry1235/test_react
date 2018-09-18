import {combineReducers, createStore} from "redux"
import thunk from 'redux-thunk';

import counterReduser from "./counterReduser";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  counterReduser
});

export default rootReducer;