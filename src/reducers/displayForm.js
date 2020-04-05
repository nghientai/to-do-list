import { TOGGLE_FORM } from "../constants/actionTypes";

var initialState = false;

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FORM:
            //console.log(action);

            return !state;

        default:
            return state;
    }
};
export default reducers;
