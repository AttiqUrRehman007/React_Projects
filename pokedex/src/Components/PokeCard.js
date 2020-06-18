import React from "react";
import classes from './PokeCard.module.css'

const pokeCard = () =>  {

        return (
            <div className={classes.PokeCard}>
            <h4><b></b></h4>
            <img src="" alt="Avatar"  />
                <div className={classes.Container}>
                    <p>type: </p>
                    <p>EXP: </p>
                </div>
        </div>
        )

 }
export default pokeCard