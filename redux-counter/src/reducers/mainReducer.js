import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";

const mainReducer = combineReducers({
    counter: counterReducer,
    isLogged: loginReducer
})

export default mainReducer;