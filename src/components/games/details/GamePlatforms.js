import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

export function GamePlatforms({platforms}){
        
    return(
            <ListGroup variant="flush">
                {Object.keys(platforms).map(item =>(
                    <ListGroup.Item key={item}>{platforms[item].platform.name}</ListGroup.Item>
                ))}
            </ListGroup>

    )
    

};
GamePlatforms.propTypes = {
    platforms: PropTypes.object.isRequired
}


export default GamePlatforms;
