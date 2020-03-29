import React,{ useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../../constants/Api";
import GameDetailItem from "./GameDetailItem";
import GameGenres from "./GameGenres";
import GamePlatforms from "./GamePlatforms";



export function Details(){

    // GET URL
    const urlPath = window.location.pathname.split("/");
    // GET ID FROM URL
    const id = urlPath[urlPath.length-1];

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);


    // API CALL
    useEffect(() => {
        fetch(BASE_URL+ "/" + id)
            .then(response => response.json())
            .then(json => { 
                setGames(json)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    },[]);// END FETCH;
   

    // LOADING SPINNER
    if (loading) {
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }


    return(
        <>
        <Row>
            <Col sm={12} md={12} key={games.id}>
                <GameDetailItem id={games.id} 
                                name={games.name} 
                                image={games.background_image} 
                                description={games.description_raw} 
                                website={games.website}
                                platforms={games.platforms}
                                genres={games.genres}
                />
            </Col>
        </Row>
        </>
    );
};

export default Details;