import {
    LIST_ALL,
    SAVE_TASK,
    UPDATE_SINGLE_STATUS,
    DELETE_SINGLE_ITEM
} from "../constants/actionTypes";

var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];

var reducers = (state = initialState, action) => {
    switch (action.type) {
        case LIST_ALL:
            return state;
        case SAVE_TASK:
            if (!action.task.id) {
                var newTaks = {
                    id: guid(),
                    name: action.task.name,
                    status: action.task.status == "false" ? false : true
                };

                state.push(newTaks);
            } else {
                var index = findIndex(state, action.task.id);
                if (index !== -1) {
                    state[index] = {
                        ...state[index],
                        name: action.task.name,
                        status: action.task.status == "false" ? false : true
                    };
                }
            }
            localStorage.setItem("tasks", JSON.stringify(state));
            return [...state];
        case UPDATE_SINGLE_STATUS:
            var index = findIndex(state, action.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                };

                localStorage.setItem("tasks", JSON.stringify(state));
            }
            return [...state];
        case DELETE_SINGLE_ITEM:
            var index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);

                localStorage.setItem("tasks", JSON.stringify(state));
            }
            return [...state];

        default:
            return state;
    }
};

var findIndex = (tasks, id) => {
    let result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
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
