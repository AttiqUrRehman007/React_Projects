import React, { Component } from "react";
import classes from "./CoinFlipper.module.css";
class CoinFlipper extends Component {
  state = {
    coinSide: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg",
      },
    ],
    total: 0,
    heads: 0,
    tails: 0,
  };

  clickHandler = () => {
    if (this.state.coinSide[Math.floor(Math.random() * 2)].side === "heads") {
      this.setState({
        heads: this.state.heads + 1,
        total: this.state.total + 1,
      });
    } else {
      this.setState({
        tails: this.state.tails + 1,
        total: this.state.total + 1,
      });
    }
  };
  render() {
    let imageUrl = this.state.coinSide[Math.floor(Math.random() * 2)];
    return (
      <React.Fragment>
        <img
          src={imageUrl.imgSrc}
          alt={imageUrl.side}
          className={classes.img}
        />
        <br />
        <button onClick={this.clickHandler}>Flip me</button>
        <p>
          Out of {this.state.total} flips, there have been {this.state.heads}{" "}
          heads and {this.state.tails} tails
        </p>
      </React.Fragment>
    );
  }
}

export default CoinFlipper;
