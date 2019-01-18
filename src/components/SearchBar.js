import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    userInput: ""
  };

  onInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.userInput);
  };

  render() {
    console.log(this.props);
    return (
      <div className=" ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.userInput}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
          <p>{this.state.userInput}</p>
        </form>
      </div>
    );
  }
}
