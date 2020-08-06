import React, { Component, Fragment } from "react";
import classes from "./ColorBox.module.css";

class ColorBox extends Component {
  state = {
    colors: [
      "#a8b8d4",
      "#00efd4",
      "#7ad236",
      "#7260d8",
      "#1deaa7",
      "#06f43a",
      "#823c59",
      "#e3d94c",
      "#dc1c06",
      "#f53b2a",
      "#b46238",
      "#2dfff6",
      "#a82b89",
      "#1a8011",
      "#436a9f",
      "#1a806a",
    ],
  };
  pickColor = () => {
    let newColor;
    do {
      newColor = [
        "#a8b8d4",
        "#00efd4",
        "#7ad236",
        "#7260d8",
        "#1deaa7",
        "#06f43a",
        "#823c59",
        "#e3d94c",
        "#dc1c06",
        "#f53b2a",
        "#b46238",
        "#2dfff6",
        "#a82b89",
        "#1a8011",
        "#436a9f",
        "#1a806a",
      ];
    } while (newColor === this.state.colors);

    this.setState({ colors: newColor });
  };

  clickHandler = () => {
    this.pickColor();
  };

  render() {
    return (
      <Fragment>
        <div
          className={classes.ColorBox}
          style={{
            backgroundColor: this.state.colors[Math.floor(Math.random() * 15)],
          }}
          onClick={this.clickHandler}
        />
      </Fragment>
    );
  }
}

export default ColorBox;
