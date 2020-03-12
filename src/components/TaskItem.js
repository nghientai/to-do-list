import React, { Component } from "react";

class TaskItem extends Component {
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
          >
            {task.status === true ? "Active" : "Hide"}
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            Edit
          </button>
          <button type="button" className="btn btn-danger ml-2">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
