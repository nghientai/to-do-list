import { SORT_BY_NAME } from "../constants/actionTypes";

var initialState = {
    sortName: 0
};

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_NAME:
            state = {
                sortName: action.v
            };

            return state;
        default:
            return state;
    }
};
export default reducers;
