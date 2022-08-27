import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={classes.header}>
      <div className={classes.item}>
        <NavLink to="/react-training/" className={classes.homeContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={classes.home}
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
        </NavLink>

        <NavLink
          to="/react-training/profile"
          className={classes.profileContainer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={classes.profile}
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </NavLink>
      </div>

      <div className={classes.item}>
        <Navbar
          key="false"
          bg="#343a40"
          variant="dark"
          expand="false"
          collapseOnSelect
        >
          <Container fluid>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-false`}
              bg="dark"
              onClick={toggleMenu}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-false"
              aria-labelledby="offcanvasNavbarLabel-expand-false"
              placement="end"
              restoreFocus={false}
              show={menuOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-false`}
                  className={classes.offcanvasTitle}
                >
                  More links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/counter"
                  >
                    Counter
                  </NavLink>
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/calculator"
                  >
                    Calculator
                  </NavLink>
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/rule34/search"
                  >
                    Rule34 Viewer
                  </NavLink>
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/notes"
                  >
                    Notes app
                  </NavLink>
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/weather/search"
                  >
                    Forecast app
                  </NavLink>
                  <NavLink
                    className={classes.offcanvasLink}
                    onClick={toggleMenu}
                    to="/react-training/anime/search"
                  >
                    Anime Search
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
