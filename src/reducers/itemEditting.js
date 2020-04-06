import { EDIT_ITEM } from "../constants/actionTypes";

var initialState = {
    id: "",
    name: "",
    status: true
};

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_ITEM:
            //console.log(action.task);
            return action.task;
        //return { ...state };
        default:
            return state;
    }
};
export default reducers;
