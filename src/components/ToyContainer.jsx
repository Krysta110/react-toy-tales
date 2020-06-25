import React from "react";
import ToyCard from "./ToyCard";

export default class ToyContainer extends React.Component {
  state = {
    allToys: this.props.allToys,
  };
  render() {
    return (
      <div id="toy-collection">
        {this.props.allToys.map((toy) => (
          <ToyCard
            key={toy.id}
            id={toy.id}
            name={toy.name}
            image={toy.image}
            likes={toy.likes}
            handleDelete={this.props.handleDelete}
            handleLike={this.props.handleLike}
          />
        ))}
      </div>
    );
  }
}
