import React,{ Fragment } from 'react';
import classes from './App.module.css';
import PokeGame from "../Components/PokeGame/PokeGame";

const app = ()=> {
  return (
      <Fragment>
        <h1 className={classes.App}>PokeGame</h1>
        <PokeGame/>
      </Fragment>

  );
}

export default app;
