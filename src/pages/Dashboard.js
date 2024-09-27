// src/pages/Dashboard.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js components

const Dashboard = () => {
  // Data for Line Chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [{
      label: 'Sales',
      data: [120, 150, 180, 170, 190, 220, 240],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Sales' }
    }
  };

  // Data for Bar Chart
  const barData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [{
      label: 'Units Sold',
      data: [50, 75, 150, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Product Performance' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <Container className="mt-5 pt-4"> 
      {/* Value Boxes */}
      <Row className="mt-4">
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center value-box-first">
            <Card.Body>
                <Card.Title className="card-title-first">APS em números</Card.Title> 
                <Card.Text className="card-text-first">(dados de 08/2023)</Card.Text> 
            </Card.Body>    
          </Card>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>57000</Card.Title>
              <Card.Text>Equipes de saúde da família</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>$89K</Card.Title>
              <Card.Text>Equipes de atenção primária à saúde</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>89%</Card.Title>
              <Card.Text>Growth</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>345</Card.Title>
              <Card.Text>Feedbacks</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2} sm={4} xs={6} className="mb-3">
          <Card className="text-center">
            <Card.Body>
              <Card.Title>12</Card.Title>
              <Card.Text>Regions</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Informational Text */}
      <div className="info-text">
        <p>
          A Atenção Primária à Saúde (APS) no Brasil compõe um dos principais conjuntos de ações e serviços ofertados na
          rede de atenção no país a partir de um investimento de quase 100 bilhões de reais* ao ano. Contudo, a sua
          organização, estrutura, processos e resultados são muito diferentes entre os municípios brasileiros.
        </p>

        <p>
          Este portal visa avaliar e monitorar a eficiência da APS desses municípios. Acesse o painel da eficiência e veja
          estas e outras informações: Quanto está sendo investido? Qual o número de equipes? Qual o desempenho dos
          municípios?
        </p>

        <p className="texto-fonte">
          * Dados de despesa liquidada em APS dos municípios em 2023. Fonte: SIOPS.
        </p>
      </div>

      {/* Centered Button */}
      <div className="text-center mb-4">
        <Button variant="primary" href="/another">Ir para a Dashboard   </Button>
      </div>

      {/* Charts */}
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Line data={lineData} options={lineOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Bar data={barData} options={barOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;