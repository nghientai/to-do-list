import { combineReducers } from "redux";
import tasks from "./tasks";
import toggleForm from "./displayForm";

const reducers = combineReducers({ tasks, toggleForm });
export default reducers;
