import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GameGenres from "./GameGenres";
import GamePlatforms from "./GamePlatforms";

export function GameDetailsItem({ name, image, description, website, platforms, genres }) {
    
    return(
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Img className="detailsImage" variant="left" src={image} />
            <Card.Body>
                <Row>
                    <Col xs={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} md={{span: 10, size: 8, offset: 1}}>
                        <Row>
                        <Col xs={6} sm={6} md={6}>
                            <Card.Subtitle>Genres</Card.Subtitle>
                            <GameGenres genres={genres} />
                        </Col>
                        <Col xs={6} sm={6} md={6}>
                            <Card.Subtitle>Platforms</Card.Subtitle>
                            <GamePlatforms platforms={platforms} />
                        </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Card.Subtitle>Description</Card.Subtitle>
                
                <Card.Text>{description}</Card.Text>
                <a href={website}>
                    <Button variant="secondary" block>
                        Offical Game Page
                    </Button>
                </a>
            </Card.Body>
        </Card>
    )
}

GameDetailsItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired

};

export default GameDetailsItem;