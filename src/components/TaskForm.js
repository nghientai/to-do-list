import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            status: true
        };
    }

    componentDidMount() {
        if (this.props.taskEditing) {
            //console.log(task);
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }
    }

    //Use getDerivedStateFromProps instead of componentWillReceiveProps
    componentWillReceiveProps(props) {
        if (props && props.taskEditing) {
            this.setState({
                id: props.taskEditing.id,
                name: props.taskEditing.name,
                status: props.taskEditing.status
            });
        } else {
            this.resetState();
        }
    }

    resetState = () => {
        this.setState({
            id: "",
            name: "",
            status: true
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.setState(this.state);
        this.props.onSaveTask(this.state);

        if (typeof this.state.id === "undefined") {
            this.resetState();
        }
    };

    onChaneHandle = event => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        });
        //console.log(this.state);
    };

    onCancel = () => {
        this.resetState();
        //this.props.onCancel();
    };
    onClear = () => {
        this.resetState();
    };

    render() {
        //console.log(this.state.status);
        if (!this.props.isShowingForm) return "";
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Task name</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Task name"
                                value={this.state.name}
                                onChange={this.onChaneHandle}
                                required
                            />
                            <input
                                type="hidden"
                                name="id"
                                value={this.state.id}
                            />
                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                className="form-control"
                                name="status"
                                onChange={this.onChaneHandle}
                                value={this.state.status}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Completed</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={this.onCancel}
                            className="btn btn-danger ml-2"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={this.onClear}
                            className="btn btn-danger ml-2"
                        >
                            Clear
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowingForm: state.toggleForm,
        taskEditing: state.itemEditting
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSaveTask: task => {
            dispatch(actions.saveTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
