import React, { Component } from "react";

class TaskSearchControl extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-6">
          <div className="input-group">
            <input
              className="form-control"
              name="keyword"
              placeholder="Type something..."
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskSearchControl;
