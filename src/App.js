import React, { Component } from "react";
import Footer from "./components/Footer";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: {
                name: "",
                status: -1
            },
            keyword: ""
        };
    }

    toggleForm = () => {
        this.props.toggleForm();
    };

    /* onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
    }; */

    onSearch = keyword => {
        this.setState({
            keyword: keyword.toLowerCase()
        });
    };

    render() {
        //console.log(this.state.tasks);
        var { filter, keyword } = this.state;
        var { isShowingForm } = this.props;
        //console.log(this.props);

        if (filter) {
            /* if (filter.name) {
                tasks = tasks.filter(task => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }

            tasks = tasks.filter(task => {
                if (filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false);
                }
            }); */
        }
        if (keyword) {
            /* tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            }); */
        }

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
                        <TaskForm onCancel={this.onCancel} />
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
                        <TaskControl onSearch={this.onSearch} />
                        {/* List */}
                        <TaskList />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isShowingForm: state.toggleForm
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleForm: () => {
            dispatch(actions.toggleForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
