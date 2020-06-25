import React, { Component } from "react";

class ToyForm extends Component {
  state = {
    name: "",
    image: "",
  };

  setName = (e) => this.setState({ name: e.target.value });
  setImage = (e) => this.setState({ image: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToy(this.state.name, this.state.image);
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
            onChange={this.setName}
          />
          <br />
          <input
            type="text"
            value={this.state.image}
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
            onChange={this.setImage}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
