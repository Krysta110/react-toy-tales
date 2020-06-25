import React, { Component } from "react";

class ToyCard extends Component {
  deleteToy = () => {
    this.props.handleDelete(this.props);
  };

  likeUp = () => {
    this.props.handleLike(this.props);
  };

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img
          src={this.props.image}
          alt={this.props.name}
          className="toy-avatar"
        />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={this.likeUp}>
          Like {"<3"}
        </button>
        <button className="del-btn" onClick={this.deleteToy}>
          Donate to GoodWill
        </button>
      </div>
    );
  }
}

export default ToyCard;
