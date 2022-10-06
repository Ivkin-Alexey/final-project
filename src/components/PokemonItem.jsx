import React from "react"
import Card from "antd/es/card";
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {catchPokemon, setCardID} from "../redux/actions";

function PokemonItem(props) {

    const dispatch = useDispatch();
    let caughtPokemons = useSelector(state => state.pokemons.caughtPokemons)

    function toUpperCase(str) {
        return str
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }

    return (
        <Link to='/card' onClick={()=>dispatch(setCardID(props.id))}>
            <Card
                hoverable
                style={{width: 240, minHeight: '357px'}}
                cover={<img alt="pokemon" src={props.imgURL}/>}
            >
                <h4>{`ID ${props.id}, ${toUpperCase(props.name)}`}</h4>
                <p>{props.date ? `Was caught on ${props.date}` : ''}</p>
                {caughtPokemons.find(item=>item.id === props.id) ?
                    <Button type={"dashed"} onClick={(e) => {
                        e.preventDefault();
                        dispatch(catchPokemon(props))}
                    }>Release</Button>
                    :
                    <Button type="primary" onClick={(e) => {
                        e.preventDefault();
                        dispatch(catchPokemon(props))}
                    }>Catch!</Button>}
            </Card>
        </Link>
    )
}

export default PokemonItem