import React, { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'





const NavBar = () => {
    const menu = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/",
            name: "Projects",
        },
        {
            path: "/contact",
            name: "Contact",
        },
        {
            path: "/",
            name: "About",
        },
    ]
    const icons = [
        {
            path: "www.facebook.com",
            name: <FontAwesomeIcon icon={faFacebook} size="xl" />
        },
        {
            path: "www.instagram.com",
            name: <FontAwesomeIcon icon={faInstagram} size="xl" />
        },
        {
            path: "www.linkedin.com",
            name: <FontAwesomeIcon icon={faLinkedin} size="xl" />
        },
        {
            path: "www.github.com",
            name: <FontAwesomeIcon icon={faGithub} size="xl" />
        },
    ]


    return (
        <Navbar
            expand="lg"
            className="navbar"
        >
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <img src={require("../img/JoLA.png")}
                        className="logo"
                        alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            menu.map((item) => (
                                <Nav.Link href={item.path} key={item.name} className="linksNav">
                                    <div className="list_items">{item.name}</div>

                                </Nav.Link>
                            ))
                        }
                        {
                            icons.map((item) => (
                                <Nav.Link to={item.path} key={item.name} className="iconsNav">
                                    <div className="list_items_icons">{item.name}</div>
                                </Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavBar;
