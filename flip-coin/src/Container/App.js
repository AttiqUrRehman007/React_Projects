import React from "react";
import classes from "./App.module.css";
import CoinFlipper from "../Components/CoinFlipper/CoinFlipper";

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Let's flip the coin!</h1>
        <CoinFlipper />
      </div>
    );
  }
}

export default App;
