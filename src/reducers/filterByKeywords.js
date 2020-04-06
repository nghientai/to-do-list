import { SEARCH_BY_KEYWORD } from "../constants/actionTypes";

var initialState = {
    keyword: ""
};

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_KEYWORD:
            state = {
                keyword: action.keyword
            };

            return { ...state };
        default:
            return state;
    }
};
export default reducers;
