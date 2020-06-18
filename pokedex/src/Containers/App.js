import React,{ Fragment } from 'react';
import classes from './App.module.css';
import PokeCard from "../Components/PokeCard";

const app = ()=> {
  return (
      <Fragment>
        <h1 className={classes.App}>Pokedex</h1>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </Fragment>

  );
}

export default app;
