import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { label, type, id, placeholder, value } = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
