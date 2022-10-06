import React, {useEffect} from 'react'
import PokemonItem from "./PokemonItem";
import 'antd/dist/antd.css';
import {Space} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemons, toggleFetching} from "../redux/actions";

function PokemonList() {
    const dispatch = useDispatch();

    let pokemons = useSelector(state => state.pokemons.pokemons)
    let isFetching = useSelector(state => state.app.fetching)
    let url = useSelector(state => state.app.url)

    useEffect(() => {
        if (isFetching) {
            dispatch(fetchPokemons(url));
            console.log(pokemons);
        }
    }, [isFetching,dispatch,url]);



    useEffect(() => {
        const scrollHandler = (e) => {
            const POKEMON_COUNT = 1118
            if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100)
                && pokemons.length < POKEMON_COUNT) {
                dispatch(toggleFetching())
            }
        };
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }

    }, [dispatch, pokemons.length])

    return (
        <Space style={{marginTop: '64px', marginBottom: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} size={[50, 50]} wrap>
            {pokemons[0] ? pokemons.map((poke, index) => {
                return <PokemonItem
                    name={poke.name}
                    imgURL={poke.imgURL}
                    key={index}
                    id={index + 1}
                />
            }) : null
            }
        </Space>
    )
}

export default PokemonList