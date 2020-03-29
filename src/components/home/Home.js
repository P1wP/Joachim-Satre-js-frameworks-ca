import React,{ useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../constants/Api";
import GamesItem from "../games/GamesItem";
import Search from "../search/Search";



//  TODO!!!
//  REDIRECT DETAILS



function GameList(){
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames ] = useState([]);
    const [loading, setLoading] = useState(true);

    //  FETCH API
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => { 
                setGames(json.results)
                setFilteredGames(json.results)
                console.dir(json)
                //setFilteredGames(json)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);// END FETCH;
    
    // SET LOCALSTORAGE
    localStorage.setItem("games", JSON.stringify(games));
    var test = localStorage.getItem("games");
    var newJson = JSON.parse(test);
    console.log(games[0]);
    
    const filterGames = function(e){
        // VALUE FROM SEARCH INPUT
        const searchValue = e.target.value.toLowerCase();

        // CREATE NEW ARRAY FROM GAMES ARRAY
        const filteredArray = games.filter(function(newGames){
            const lowerCaseName = newGames.name.toLowerCase();

            //Check if the games name begins with search value
            if(lowerCaseName.startsWith(searchValue)){
                // If it does return true
                return true;
            }
            // ELSE
            return false;
        });
        setFilteredGames(filteredArray);
    }
  
   

    if (loading) {
        return (
            <>
            <Spinner animation="border" className="spinner" />
            
            </>
        );
    }

   // DISPLAY DATA
    return (
        <>
        <Search HandleSearch={filterGames} />
        <Row>
            {filteredGames.map(games =>{
                const {id, name, background_image, released, rating} = games;

                return(
                     <Col sm={12} md={6} lg={4} key={id}>
                         <GamesItem id={id} name={name} image={background_image} release={released} rating={rating} />
                    </Col>
                )
            })}
        </Row>
        </>
     
    ); // END RETURN;

} // END GamesList()

export default GameList;