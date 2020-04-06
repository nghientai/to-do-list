import { TOGGLE_FORM, OPEN_FORM } from "../constants/actionTypes";

var initialState = false;

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            return !state;
        case OPEN_FORM:
            return true;
        default:
            return state;
    }
};
export default reducers;
