import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onDeleteItem = () => {
        this.props.onDeleteItem(this.props.task.id);
    };
    onEditItem = () => {
        this.props.openForm();
        this.props.onEditItem(this.props.task);
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
                        {task.status === true ? "Active" : "Completed"}
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

const mapDispatchToProps = dispatch => {
    return {
        onUpdateStatus: id => {
            dispatch(actions.updateOnSingleItem(id));
        },
        onDeleteItem: id => {
            dispatch(actions.deleteSingleItem(id));
        },
        onEditItem: task => {
            dispatch(actions.editItem(task));
        },
        openForm: () => {
            dispatch(actions.onOpenForm());
        }
    };
};

export default connect(null, mapDispatchToProps)(TaskItem);
