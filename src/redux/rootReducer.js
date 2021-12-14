import {combineReducers} from "redux";
import {pokemonsReducer} from "./pokemonsReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    app: appReducer
})