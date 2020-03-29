import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export function GameGenres({genres}){
        
    return(
            <ListGroup variant="flush">
                {Object.keys(genres).map(item =>(
                    <ListGroup.Item key={item}>{genres[item].name}</ListGroup.Item>
                ))}
            </ListGroup>

    )
    

};





export default GameGenres;