import { SET_FILTER } from '../actionsTypes';
import { VISIBILITY } from "../../constants"

// set the initial state of visibility filter to be 'all'
const initialState = VISIBILITY.ALL;

// define the visibility reducer function
const visibility = (state = initialState, action) => {
    switch(action.type) {
        // if the action is of type 'SET_FILTER', return the filter in the payload
        case SET_FILTER: {
            return action.payload.filter
        }
        // for any other action, just return the current state
        default: {
            return state
        }
    }
}

// export the visibility reducer function as the default export of this module
export default visibility;
