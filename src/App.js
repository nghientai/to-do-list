import React, { Component } from "react";
import Footer from "./components/Footer";
import TaskSearchControl from "./components/TaskSearchControl";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { connect } from "react-redux";
import * as actions from "./actions";
import TaskSortControl from "./components/TaskSortControl";

class App extends Component {
    constructor(props) {
        super(props);
    }

    toggleForm = () => {
        this.props.toggleForm();
    };

    render() {
        var { isShowingForm } = this.props;

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
                        <div className="row mt-3">
                            <TaskSearchControl />
                            {/* <TaskSortControl /> */}
                        </div>

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
