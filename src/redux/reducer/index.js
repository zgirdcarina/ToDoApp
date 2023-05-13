import {combineReducers} from "redux";
import visibility from "./visibility";
import todos from "./todos";

//The visibility and todos reducers are imported and passed as an object to the combineReducers function.
// This creates a new reducer function that can handle actions for both slices of state.
export default combineReducers({
    todos,
    visibility
});
