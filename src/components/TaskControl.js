import React, { Component } from "react";
import TaskSearchControl from "./TaskSearchControl";

class TaskControl extends Component {
  render() {
    return <TaskSearchControl onSearch={this.onSearch} />;
  }
}

export default TaskSearchControl;
