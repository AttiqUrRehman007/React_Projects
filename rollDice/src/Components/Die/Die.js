import React, { Component } from "react";
import classes from "./Die.module.css";

class Die extends Component {
  render() {
    return (
      <div className={classes.Die}>
        <i
          className={`${this.props.value} ${
            this.props.rolling ? classes.shaking : null
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
