import React, { Component } from "react";
import Die from "../Die/Die";
import classes from "./RollDice.module.css";

class RollDice extends Component {
  state = {
    diceClass: [
      "fas fa-dice-one fa-7x",
      "fas fa-dice-two fa-7x",
      "fas fa-dice-three fa-7x",
      "fas fa-dice-four fa-7x",
      "fas fa-dice-five fa-7x",
      "fas fa-dice-six fa-7x",
    ],
    rolling: false,
  };
  render() {
    const roll = () => {
      this.setState({ rolling: true });
      setTimeout(() => {
        this.setState({ rolling: false });
      }, 1000);
    };
    const diceClass = () => {
      const randNum = Math.floor(Math.random() * 6 + 1);
      if (randNum === 1) {
        return this.state.diceClass[0];
      } else if (randNum === 2) {
        return this.state.diceClass[1];
      } else if (randNum === 3) {
        return this.state.diceClass[2];
      } else if (randNum === 4) {
        return this.state.diceClass[3];
      } else if (randNum === 5) {
        return this.state.diceClass[4];
      } else if (randNum === 6) {
        return this.state.diceClass[5];
      }
    };

    return (
      <div className={classes.RollDice}>
        <div className={classes.RollDiceDie}>
          <Die value={diceClass()} rolling={this.state.rolling} />
          <Die value={diceClass()} rolling={this.state.rolling} />
        </div>

        <button onClick={roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
