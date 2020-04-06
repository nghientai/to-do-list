import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class TaskSortControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByName: 0
        };
    }

    onChange = event => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        this.setState({
            [name]: value
        });
        this.props.onSort(this.state);
        //console.log(this.state);
    };

    render() {
        return (
            <div className="col-6">
                <div className="input-group">
                    <select
                        className="form-control"
                        name="sortByName"
                        value={this.state.sortByName}
                        onChange={this.onChange}
                    >
                        <option value="">Sort by</option>
                        <option value={1}>Name A-Z</option>
                        <option value={-1}>Name Z-A</option>
                    </select>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
const mapActionsToProps = dispatch => {
    return {
        onSort: v => {
            return dispatch(actions.sortByName(v));
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(TaskSortControl);
