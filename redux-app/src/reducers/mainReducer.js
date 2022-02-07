import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from './isLogged';


const mainReducer = combineReducers({
    counter: counterReducer,
    isLogged:  loggedReducer
});

export default mainReducer;

