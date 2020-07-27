import React from "react";
import classes from "./App.module.css";
import RollDice from "../Components/RollDice/RollDice";

function App() {
  return (
    <div className={classes.App}>
      <RollDice />
    </div>
  );
}

export default App;
