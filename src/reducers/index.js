import { combineReducers } from "redux";
import tasks from "./tasks";
import toggleForm from "./displayForm";
import itemEditting from "./itemEditting";
import filterTable from "./filter";

const reducers = combineReducers({
    tasks,
    toggleForm,
    itemEditting,
    filterTable
});
export default reducers;
