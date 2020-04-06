import React, { Component } from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "../actions";

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

        this.props.onFilter({
            filterName: name === "filterName" ? value : this.state.filterName,
            filterStatus:
                name === "filterStatus" ? value : this.state.filterStatus
        });
        this.setState({
            [name]: value
        });
    };

    render() {
        var taskItems;
        var { filterName, filterStatus } = this.props.filter;
        var { keyword } = this.props.keyword;
        var { tasks } = this.props;

        if (filterName) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filterName) !== -1;
            });
        }
        console.log(this.props);

        tasks = tasks.filter(task => {
            if (filterStatus === -1) {
                return task;
            } else {
                return task.status === (filterStatus === 1 ? true : false);
            }
        });

        if (keyword) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            });
        }

        if (tasks.length === 0) {
            //console.log(this.props.tasks.length);
            taskItems = (
                <tr>
                    <td colSpan="4">No items</td>
                </tr>
            );
        } else {
            taskItems = tasks.map((task, index) => {
                return <TaskItem key={task.id} task={task} index={index + 1} />;
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
                                <option value="0">Completed</option>
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

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        filter: state.filterTable,
        keyword: state.filterByKeyWords,
        sortByName: state.v
    };
};

const mapActionsToProps = dispatch => {
    return {
        onFilter: filterData => {
            dispatch(actions.filterTable(filterData));
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(TaskList);
