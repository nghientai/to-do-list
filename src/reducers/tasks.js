import { LIST_ALL, ADD_TASK } from "../constants/actionTypes";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL:
            return state;
        case ADD_TASK:
            var newTaks = {
                id: guid(),
                name: action.task.name,
                status: action.task.status == "true" ? true : false
            };
            state.push(newTaks);
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];

        default:
            return state;
    }
};

var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};

var guid = () => {
    return (
        s4() +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        "-" +
        s4() +
        s4() +
        s4()
    );
};

export default reducers;
