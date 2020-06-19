import React from "react";
import PokeCard from '../PokeCard/PokeCard';
import classes from './Pokedex.module.css'

const Pokedex = (props) => {
   // const poke = useState( [
   //          {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
   //          {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
   //          {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
   //          {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
   //          {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
   //          {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
   //          {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
   //          {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
   //      ]
   //  )[0];
    let title;
    if(props.isWinner){
        title = <h2 className={classes.Winner}>Winning Hands</h2>
    }else {
        title = <h2 className={classes.Loser}>Losing Hands</h2>
    }

        const pokeCard = props.pokemon.map(pd => {
            return  <PokeCard key={pd.id} name={pd.name} type={pd.type} experince={pd.base_experience} id={pd.id}/>
        })
        return (
            <div className={classes.Pokedex}>
                {title}
                <h4>Total Experince: {props.exp} </h4>
                {pokeCard}
            </div>
        )
}

export default Pokedex;