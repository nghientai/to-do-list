import { combineReducers } from "redux";
import tasks from "./tasks";
import toggleForm from "./displayForm";
import itemEditting from "./itemEditting";
import filterTable from "./filter";
import filterByKeyWords from "./filterByKeywords";
import sortByName from "./sortByName";

const reducers = combineReducers({
    tasks,
    toggleForm,
    itemEditting,
    filterTable,
    filterByKeyWords,
    sortByName
});
export default reducers;
