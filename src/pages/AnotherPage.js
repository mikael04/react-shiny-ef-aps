// src/pages/AnotherPage.js

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AnotherPage = () => {
  return (
    <Container className="mt-5 pt-4 text-center">
      
      {/* iFrame to Another Application */}
      <div className="iframe-container mb-4">
        <iframe 
          src="http://localhost:21040"  // Replace with your application's URL
          title="External Application"
          width="100%"
          height="500px"
          style={{ border: "none" }}
        ></iframe>
      </div>
    </Container>
  );
};

export default AnotherPage;