import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

import data from "./data";

class App extends React.Component {
  state = {
    display: false,
    data: data,
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  addToy = (name, image) => {
    this.setState({
      data: [...data, { name: name, image: image }],
    });
  };

  handleDelete = (toy) => {
    this.setState({
      data: this.state.data.filter((item) => item.id !== toy.id),
    });
  };

  handleLike = (toy) => {
    let singleToy = this.state.data.find((item) => item.id === toy.id);
    ++singleToy.likes;
    this.setState({
      data: this.state.data.map((toy) =>
        toy.id === singleToy.id ? singleToy : toy
      ),
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.display ? <ToyForm addToy={this.addToy} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          allToys={this.state.data}
          handleDelete={this.handleDelete}
          handleLike={this.handleLike}
        />
      </div>
    );
  }
}

export default App;
