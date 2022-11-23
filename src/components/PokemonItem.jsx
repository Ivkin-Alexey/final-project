import React from "react"
import Card from "antd/es/card";
import Button from "antd/es/button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {catchPokemon, releasePokemon} from "../redux/actions";

function PokemonItem(props) {

    const dispatch = useDispatch();
    let navigate = useNavigate();

    function toUpperCase(str) {
        return str
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }

    return (
        <Link to={`/info/${props.id}`} onClick={() => navigate(`/info/${props.id}`)}>
            <Card
                hoverable
                style={{width: 240, minHeight: '357px'}}
                cover={<img alt="pokemon" src={props.imgURL}/>}
            >
                <h4>{`ID ${props.id}, ${toUpperCase(props.name)}`}</h4>
                <p>{props.date ? `Was caught on ${props.date}` : ''}</p>
                {props.isCaught ?
                    <Button type={"dashed"} onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(releasePokemon(props.id))}
                    }>Release</Button>
                    :
                    <Button type="primary" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(catchPokemon(props.id))
                    }
                    }>Catch!</Button>}
            </Card>
        </Link>
    )
}

export default PokemonItem