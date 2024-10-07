// src/components/NavbarComponent.js

import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavbarComponent.css';  // Import the CSS file
import logo from '../assets/logo-navbar-aps-parceiros.svg'; // Import the logo

const NavbarComponent = () => {
  return (
    <Container fluid className="p-0">
      <Row className="">
        <Col className="text-center py-2">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Col>
      </Row>
      <Row>
        <Col>
        <Navbar className="navbar navbar-expand-lg navbar-style justify-content-center" expand="lg">
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto d-flex align-items-center">
              <Nav.Link as={NavLink} to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>
                SOBRE
              </Nav.Link>

              <Nav.Link as={NavLink} to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>
                PAINEL DE EFICIÊNCIA
              </Nav.Link>

              <Nav.Link as={NavLink} to="/another" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>
                RELATÓRIOS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarComponent;     