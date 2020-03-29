import React, {useState} from "react";
import Button from "react-bootstrap/Button";

// useState trigger like/dislike SEE CONTACT.js
// if user likes game
    // PUSH GAME TO ARRAY(TRY TO MAKE IT INDEXED)
// if user UNlikes game
    // REMOVE FROM ARRAY

// USE ARRAY TO RENDER FAVOURITES PAGE
    // LIKE DISLIKE SHOULD BE WORKING ON THIS PAGE AS WELL.



// GET LENGTH OF ARRAY/OBJECT. 
    // USE STORED VALUE TO REMOVE GIVEN ITEM LATER. 
    // OR MAP AND SEARCH FORM ID

export function FavButton({id, name, image, rating, release, like, btnType}){
    const [likeButton, setLikeButton] = useState(false);


    // LOCALSTORAGE
    function storage(){
        if(localStorage.getItem("FavGames")){
            return;
        }
        localStorage.setItem("FavGames", null);
    }
   
    // HANDLE BUTTON CLICK
    function toFavList(){
        if(likeButton){
            // SET STATE
            setLikeButton(false);
            return
        }
        //ELSE
        // SET STATE
        setLikeButton(true);
        storage();
        // ADD TO STORAGE
            // Get item
            // Push to item
            // Set item
        //myFavs = [{"id": id, "name": name, "image": image, "rating": rating, "release": release}];
    }// END toFavList;
    

    // CHANGE LOOK OF BTN
    if(likeButton){
        console.log(likeButton);
        like = "Remove";
        btnType = "danger";
    }
    else{
        like = "Add";
        btnType = "primary";
    }// END IF;
    
    return(
        <Button onClick={toFavList} variant={btnType} block>
                        {like}
        </Button>
    )
}

export default FavButton;