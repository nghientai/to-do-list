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
  }

  //Use getDerivedStateFromProps instead of componentWillReceiveProps
  componentWillReceiveProps(props) {
    if (props && props.taskEditing) {
      this.setState({
        id: props.taskEditing.id,
        name: props.taskEditing.name,
        status: props.taskEditing.status
      });
    }
  }

  resetState = () => {
    this.setState({
      id: "",
      name: "",
      status: false
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState(this.state);

    this.props.onSave(this.state);
    if (this.state.id === "") {
      //console.log(this.state);
      this.resetState();
    }
  };

  onChaneHandle = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    //console.log(target.name + " - " + target.value);
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
              <input type="hidden" name="id" value={this.state.id} />
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

export default TaskForm;
