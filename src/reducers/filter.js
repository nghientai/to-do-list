import { TABLE_FILTER } from "../constants/actionTypes";

var initialState = {
    filterName: "",
    filterStatus: -1
};

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case TABLE_FILTER:
            var filterStatus = parseInt(action.filterData.filterStatus, 10);
            state = {
                filterName: action.filterData.filterName.toLowerCase(),
                filterStatus: filterStatus
            };

            //return state;
            return { ...state };
        default:
            return state;
    }
};
export default reducers;
