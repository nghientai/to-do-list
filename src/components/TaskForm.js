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
    //console.log("Component will mount");
    //this.resetState();
  }

  // static getDerivedStateFromProps(nextProps, state) {
  //   // console.log("Component props " + nextProps);
  //   // return {
  //   //   id: "",
  //   //   name: "",
  //   //   status: true
  //   // };
  //   //return null;
  // }

  resetState = () => {
    this.setState({
      id: "",
      name: "",
      status: true
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSave(this.state);
    //console.log(event.target.name);
  };

  onChaneHandle = event => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
    //console.log(this.state);
  };

  onCancel = () => {
    this.props.onCancel();
  };

  render() {
    //console.log(this.state);

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
                <option value="{false}">Hide</option>
                <option value="{true}">Active</option>
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
