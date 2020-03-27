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
      isShowingForm: false,
      taskEditing: null
    };
  }

  // The component will call after DOM is updated
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
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

  onSave = data => {
    var { tasks } = this.state;
    data.status = data.status === "true" ? true : false;

    data.id = this.guid();
    tasks.push(data);

    this.setState({
      tasks: tasks
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log(tasks);
  };

  onUpdateStatus = id => {
    var { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    //console.log(index);
  };

  onDeleteItem = id => {
    var { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  findIndex = id => {
    var { tasks } = this.state;
    let resutl = -1;
    tasks.forEach((task, index) => {
      if (task.id == id) {
        resutl = index;
      }
    });
    return resutl;
  };

  showForm = () => {
    this.setState({
      isShowingForm: true
    });
  };

  onEditItem = id => {
    // Open Form
    this.showForm();

    var { tasks } = this.state;
    let index = this.findIndex(id);

    if (index !== -1) {
      let taskEditing = tasks[index];
      //console.log(taskEditing);
      this.setState({
        taskEditing: taskEditing
      });
    }
  };

  render() {
    //console.log(this.state.tasks);
    var { tasks, isShowingForm, taskEditing } = this.state;
    //console.log(this.state.taskEditing);
    var taskForm = this.state.isShowingForm ? (
      <TaskForm
        taskEditing={taskEditing}
        onSave={this.onSave}
        onCancel={this.onCancel}
      />
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
              {isShowingForm ? "Close Todo Form" : "Add Todo"}
            </button>

            {/* Search Form */}
            <TaskControl />
            {/* List */}
            <TaskList
              tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDeleteItem={this.onDeleteItem}
              onEditItem={this.onEditItem}
            />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
