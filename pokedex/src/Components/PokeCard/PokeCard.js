import React from "react";
import classes from './PokeCard.module.css'

const pokeCard = (props) =>  {
        const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)
        const src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(props.id)}.png`
        return (
            <div className={classes.PokeCard}>
            <h3><b>{props.name}</b></h3>
            <img src={src} alt="Avatar"  />
                <div className={classes.Container}>
                    <p>type: {props.type} </p>
                    <p>EXP: {props.experince} </p>
                </div>
        </div>
        )

 }
export default pokeCard