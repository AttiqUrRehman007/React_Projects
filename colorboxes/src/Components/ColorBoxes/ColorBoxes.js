import React, { Component } from "react";
import classes from "./ColorBoxes.module.css";
import ColorBox from "./ColorBox/ColorBox";

class ColorBoxes extends Component {
  render() {
    const boxes = Array.from({ length: 18 }).map(() => {
      return <ColorBox />;
    });
    return <div className={classes.ColorBoxes}>{boxes}</div>;
  }
}

export default ColorBoxes;
