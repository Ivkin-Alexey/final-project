import React from 'react';
import {Card, Space} from "antd";
import {useDispatch, useSelector} from 'react-redux';
import {catchPokemon, releasePokemon} from "../redux/actions";
import Button from "antd/es/button";
import {useParams} from "react-router";

const PokemonInfo = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const properties = useSelector(state => state.pokemons.pokemons[id - 1]);



    return (
        <Space style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 64px)'
        }} size={[50, 50]}>
                <Card
                    hoverable
                    style={{height: '730px', width: '475px'}}
                    cover={<img alt="pokemon" src={properties.imgURL}/>}
                >
                    <h4>ID: {id}, {properties.name}</h4>
                    <p>Abilities: {properties.abilities}</p>
                    <p>Types: {properties.types}</p>
                    <p>Weight: {properties.weight}</p>
                    <p>{properties.isCaught ? `Was caught on ${properties.date}` : ''}</p>
                    {properties.isCaught ?
                        <Button type={"dashed"} onClick={(e) => {
                            e.preventDefault();
                            dispatch(releasePokemon(id))
                        }
                        }>Release</Button>
                        :
                        <Button type="primary" onClick={(e) => {
                            e.preventDefault();
                            dispatch(catchPokemon(id))
                        }
                        }>Catch!</Button>}
                </Card>
        </Space>
    )
}

export default PokemonInfo