import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
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

    //this.resetState();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskEditing) {
      //console.log(task);
      this.setState({
        id: nextProps.taskEditing.id,
        name: nextProps.taskEditing.name,
        status: nextProps.taskEditing.status
      });
    }
    //console.log(nextProps.taskEditing);
  }

  resetState = () => {
    this.setState({
      name: "",
      status: false
    });
  };

  onSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    this.props.onSave(this.state);
    this.resetState();
  };

  onChaneHandle = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    //console.log(target.name + " - " + target.value);
    this.setState({
      [name]: value
    });
  };

  onCancel = () => {
    this.resetState();
    //this.props.onCancel();
  };

  render() {
    //console.log(this.props.taskEditing);

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
                <option value={false}>Hide</option>
                <option value={true}>Active</option>
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
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
