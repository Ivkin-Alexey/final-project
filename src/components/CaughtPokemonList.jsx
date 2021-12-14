import PokemonItem from "./PokemonItem";
import {useSelector} from 'react-redux';
import Space from "antd/es/space";
import React from "react";

function CaughtPokemonList() {

    let pokemons = useSelector(state => state.pokemons.pokemons);

    return (
        <Space style={{marginTop: '64px', marginBottom: '64px', height: '100%', display: 'flex',
            justifyContent: 'center', alignItems: 'center'}} size={[50, 50]} wrap>
            {pokemons.find(pokemon=>pokemon.isCaught === true) ? pokemons.map((pokemon,index) => {
                return pokemon.isCaught ?
                <PokemonItem
                    id={index+1}
                    name={pokemon.name}
                    url={pokemon.url}
                    imgURL={pokemon.imgURL}
                    types={pokemon.types}
                    abilities={pokemon.abilities}
                    weight={pokemon.weight}
                    isCaught={pokemon.isCaught}
                    key={index+1}
                /> : null
            }) : <h4>You have not caught pokemons yet!</h4>
            }
        </Space>
    )
}

export default CaughtPokemonList