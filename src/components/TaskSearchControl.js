import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class TaskSearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        };
    }

    onChange = event => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    };

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    };

    render() {
        var { keyword } = this.state;
        return (
            <div className="col-6">
                <div className="input-group">
                    <input
                        className="form-control"
                        name="keyword"
                        placeholder="Type something..."
                        value={keyword}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button
                            onClick={this.onSearch}
                            className="btn btn-primary"
                            type="button"
                        >
                            Search
                        </button>
                    </span>
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
        onSearch: keyword => {
            return dispatch(actions.searchByKeywords(keyword));
        }
    };
};

export default connect(mapStateToProps, mapActionsToProps)(TaskSearchControl);
