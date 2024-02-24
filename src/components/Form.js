import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "",
      tutorials: "",
    };
  } //end of constructor

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  }; //username handler
  commentHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  }; //comment handler
  listHandler = (event) => {
    this.setState({
      tutorials: event.target.value,
    });
  }; //list handler
  submitHandler = (event) => {
    alert(
      `UserName:${this.state.username}\n Comment:${this.state.comment}\nTutorial:${this.state.tutorials}\n`
    );
  }; //submit handler

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            UserName:
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameHandler}
            />
          </label>
        </div>
        <div>
          <label>comment: </label>
          <textarea
            value={this.state.comment}
            onChange={this.commentHandler}
          ></textarea>
        </div>
        <div>
          <select value={this.state.tutorials} onChange={this.listHandler}>
            <label>Courses:</label>
            <option value="js">javascript </option>
            <option value="c++">c++ </option>
            <option value="react">React </option>
          </select>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default Form;
