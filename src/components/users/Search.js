import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired
  };
  state = {
    text: "",
    text1: ""
  };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });
  onSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.text);
  };
  onClick = event => {
    this.props.clear();
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            placeholder="Search Users..."
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
        {this.props.showClearButton && (
          <button className="btn btn-clear btn-block" onClick={this.onClick}>
            Clear
          </button>
        )}
        {/* {this.props.showClear === true ? (
          <button className="btn btn-dark my-1" onClick={this.onClick}>
            Clear
          </button>
        ) : (
          ""
        )} */}
      </div>
    );
  }
}

export default Search;
