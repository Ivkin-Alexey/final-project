import React from "react"
import Card from "antd/es/card";
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {catchPokemon, releasePokemon, setCardID} from "../redux/actions";

function PokemonItem(props) {

    const dispatch = useDispatch();

    return (
        <Link to='/info' onClick={() => dispatch(setCardID(props.id))}>
            <Card
                hoverable
                style={{width: '240px', minHeight: '357px'}}
                cover={<img alt="pokemon" src={props.imgURL}/>}
            >
                <h4>ID {props.id}, {props.name}</h4>
                <p>{props.date ? `Was caught on ${props.date}` : ''}</p>
                {props.isCaught ?
                    <Button type={"dashed"} onClick={(e) => {
                        e.preventDefault();
                        dispatch(releasePokemon(props.id))
                    }
                    }>Release</Button>
                    :
                    <Button type="primary" onClick={(e) => {
                        e.preventDefault();
                        dispatch(catchPokemon(props.id))
                    }
                    }>Catch!</Button>}
            </Card>
        </Link>
    )
}

export default PokemonItem