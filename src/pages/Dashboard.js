// src/pages/AnotherPage.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container fluid className="vh-100 d-flex flex-column">
      
      {/* iFrame to Another Application */}
      <div className="iframe-container flex-grow-1">
        <iframe
          className="iframe-sizing"
          // src="https://monitoraps.org/shiny.ef.aps.dashboard/"  // Replace with your application's URL
          src="http://127.0.0.1:4000/"  // Replace with your application's URL
          title="Shiny Dashboard"
        ></iframe>
      </div>
    </Container>        
  );
};

export default Dashboard;     