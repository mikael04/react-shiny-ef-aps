// src/pages/AnotherPage.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container fluid className="p-0 m-0 vh-100 d-flex flex-column">
      
      {/* iFrame to Another Application */}
      <div className="iframe-container flex-grow-1">
        <iframe 
          // src="https://monitoraps.org/shiny.ef.aps.dashboard/"  // Replace with your application's URL
          src="http://127.0.0.1:4000/"  // Replace with your application's URL
          title="External Application"
          width="100%"
          height="100%"
          style={{ border: "none", flexGrow: 1 }}
        ></iframe>
      </div>
    </Container>        
  );
};

export default Dashboard;     