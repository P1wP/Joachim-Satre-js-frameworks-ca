import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Container from "react-bootstrap/Container";

// PAGES
import Home from "../home/Home.js";
import Contact from "../contact/Contact";
import About from "../about/About.js"
import GameDetails from "../games/details/GameDetails.js";

function Layout(){
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact>
                    <Navbar.Brand>JS-Frameworks CA</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">
                            Games
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/game/:id" component={GameDetails} />
                </Switch>
            </Container>
        </Router>
    );
};


export default Layout;