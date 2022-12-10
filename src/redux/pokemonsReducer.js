import {CATCH_POKEMON, FETCH_POKEMONS, RELEASE_POKEMON, SET_CARD_ID} from "./types";

const initialState = {
    pokemons: [],
    cardID: null
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {...state, pokemons: [...state.pokemons, ...action.payload]}
        case SET_CARD_ID:
            return {...state, cardID: action.id}
        case CATCH_POKEMON:
            console.log(typeof action.id)
            return {
                ...state, pokemons: state.pokemons.map((el,index) => {
                    if (index+1 === action.id) {
                        return Object.assign({}, el, {
                            isCaught: true,
                            date: action.date})
                    }
                    return el
                })
            }
        case RELEASE_POKEMON:
            return {
                ...state, pokemons: state.pokemons.map((el,index) => {
                    if (index+1 === action.id) {
                        return Object.assign({}, el, {
                            isCaught: false,
                            date: action.date})
                    }
                    return el
                })
            }
        default:
            return state
    }
}