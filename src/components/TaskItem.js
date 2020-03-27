import React, { Component } from "react";

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDeleteItem = () => {
    this.props.onDeleteItem(this.props.task.id);
  };
  onEditItem = () => {
    this.props.onEditItem(this.props.task.id);
  };

  render() {
    var { task, index } = this.props;

    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{task.name} </td>
        <td>
          <span
            className={
              task.status === true
                ? "badge badge-success"
                : "badge badge-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <button
            onClick={this.onEditItem}
            type="button"
            className="btn btn-warning"
          >
            Edit
          </button>
          <button
            onClick={this.onDeleteItem}
            type="button"
            className="btn btn-danger ml-2"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
