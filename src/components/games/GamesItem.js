import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import FavButton from "./favourites/FavouriteButton";

export function GamesItem({id, name, image, rating, release}) {
    return(
        <Card>
            <div className="imgContainer">
            <Card.Img className="allImages" variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Rating</Card.Subtitle>
                <Card.Text>{rating}</Card.Text>
                <Card.Subtitle>Release</Card.Subtitle>
                <Card.Text>{release}</Card.Text>
                <Link to={"/game/" + id}>
                    <Button variant="secondary" block>
                        View
                    </Button>
                </Link>
                <FavButton id={id} name={name} image={image} rating={rating} release={release} />
            </Card.Body>
        </Card>
    )
}

GamesItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default GamesItem;