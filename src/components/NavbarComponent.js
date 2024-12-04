// src/components/NavbarComponent.js

import React from 'react';
import { Navbar, Nav, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './NavbarComponent.css';  // Import the CSS file
import logo from '../assets/logos/logo-monitoraps-parceiros.svg'; // Import the logo

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
                  INÍCIO
                </Nav.Link>

                <Nav.Link as={NavLink} to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' }>
                  PAINEL DE EFICIÊNCIA
                </Nav.Link>

                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    SOBRE
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/projeto">O projeto</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/metodologia">A metodologia</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/equipe">A equipe</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarComponent;