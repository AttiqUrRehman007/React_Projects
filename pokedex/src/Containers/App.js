import React,{ Fragment } from 'react';
import classes from './App.module.css';
import Pokedex from "./Pokedex";

const app = ()=> {
  return (
      <Fragment>
        <h1 className={classes.App}>Pokedex</h1>
        <Pokedex />
      </Fragment>

  );
}

export default app;
