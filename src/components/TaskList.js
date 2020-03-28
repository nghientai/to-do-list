import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1
    };
  }

  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name == "filterName" ? value : this.state.filterName,
      name == "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value
    });

    //console.log(this.state);
  };

  render() {
    var taskItems;
    var { filterName, filterStatus } = this.state;
    if (this.props.tasks == null) {
      //console.log(this.props.tasks.length);
      taskItems = (
        <tr>
          <td colSpan="4">No items</td>
        </tr>
      );
    } else {
      var { tasks } = this.props;
      taskItems = tasks.map((task, index) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            index={index + 1}
            onUpdateStatus={this.props.onUpdateStatus}
            onDeleteItem={this.props.onDeleteItem}
            onEditItem={this.props.onEditItem}
          />
        );
      });
    }

    return (
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                className="form-control"
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value="-1">All</option>
                <option value="0">Hide</option>
                <option value="1">Active</option>
              </select>
            </td>
            <td></td>
          </tr>
          {taskItems}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
