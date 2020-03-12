import React, { Component } from "react";
import Footer from "./components/Footer";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [], // id: , name: "", status: true/false
      isShowingForm: false
    };
  }

  // The component will call after DOM is updated
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks") !== "") {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  }

  toggleForm = () => {
    this.setState({
      isShowingForm: !this.state.isShowingForm
    });
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  generateData = () => {
    var tasks = [
      {
        id: this.guid(),
        name: "Task 1",
        status: true
      },
      {
        id: this.guid(),
        name: "Task 2",
        status: false
      }
    ];

    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log("generate");
  };

  onSave = data => {
    var tasks = this.state.tasks;
    data.status = data.status === "true" ? true : false;
    if (data.id === "") {
      data.id = this.guid();
      if (tasks !== null) {
        tasks.push(data);
      } else {
        tasks.push(data);
      }
    }

    console.log(tasks);

    this.setState({
      tasks: tasks
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log(data.status);
  };

  onCancel = () => {
    this.setState({
      isShowingForm: false
    });
  };

  render() {
    var { tasks, isShowingForm } = this.state;
    var taskForm = this.state.isShowingForm ? (
      <TaskForm onSave={this.onSave} onCancel={this.onCancel} />
    ) : (
      ""
    );

    return (
      <div className="container">
        {/* Logo */}
        <div className="py-5 text-center">
          <h2>Todo List App</h2>
        </div>

        <div className="row">
          {/* Task Form */}
          <div
            className={
              isShowingForm === true
                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                : ""
            }
          >
            {taskForm}
          </div>
          <div
            className={
              isShowingForm === true
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            {/* Buttons */}
            <button
              type="buton"
              className="btn btn-primary"
              onClick={this.toggleForm}
            >
              Add new
            </button>

            <button
              type="buton"
              className="btn btn-primary ml-2"
              onClick={this.generateData}
            >
              Generate
            </button>
            {/* Search Form */}
            <TaskControl />
            {/* List */}
            <TaskList tasks={tasks} />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
