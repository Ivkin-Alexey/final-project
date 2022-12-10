import {
    CATCH_POKEMON,
    FETCH_POKEMONS, RELEASE_POKEMON,
    SET_NEXT_PAGE_URL,
    TOGGLE_FETCHING
} from "./types";

export function fetchPokemons(url) {
    console.log('fetch')
    return async dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let promises = data.results.map((result) => {
                    return fetch(result.url)
                        .then(res => res.json())
                        .then(resultData => {
                            return {
                                name: toUpperCase(resultData.name),
                                url: result.url,
                                imgURL: resultData.sprites.other['official-artwork'].front_default,
                                types: resultData.types.map(type => type.type.name).join(', '),
                                abilities: resultData.abilities.map(ability => ability.ability.name).join(', '),
                                weight: resultData.weight,
                                isCaught: false,
                            }
                        })
                })
                Promise.all(promises).then(pokemons => {
                    dispatch({type: FETCH_POKEMONS, payload: pokemons})
                    dispatch({type: SET_NEXT_PAGE_URL, url: data.next})
                })
            })
    }
}

function toUpperCase(string) {
    return string
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
}

export function catchPokemon(id) {
    const date = new Date().toUTCString();
    return {
        type: CATCH_POKEMON, id, date
    }
}

export function releasePokemon(id) {
    return {
        type: RELEASE_POKEMON, id
    }
}

export function toggleFetching() {
    return {
        type: TOGGLE_FETCHING
    }
}