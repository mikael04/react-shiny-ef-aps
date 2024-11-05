// src/pages/Home.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import imgEfProcIvs from '../assets/graphs/fig_efi_processos_ivs.png';
import imgProcPortePop from '../assets/graphs/fig_efi_processos_porte_pop.png';
import imgEfResIvs from '../assets/graphs/fig_efi_resultados_ivs.png';
import imgResPortePop from '../assets/graphs/fig_efi_resultados_porte_pop.png';
import imgEvDesp from '../assets/graphs/fig_evolucao_desp.png';
import imgEvPrev from '../assets/graphs/fig_evolucao_previne.png';
import imgMorbiMort from '../assets/graphs/fig_morbimortalidade.png';

Chart.register(...registerables); // Register Chart.js components

const Home = () => {
  // // Data for Line Chart
  // const lineData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  //   datasets: [{
  //     label: 'Sales',
  //     data: [120, 150, 180, 170, 190, 220, 240],
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //     borderColor: 'rgba(54, 162, 235, 1)',
  //     borderWidth: 2,
  //     fill: true,
  //     tension: 0.4
  //   }]
  // };

  // const lineOptions = {
  //   responsive: true, 
  //   plugins: {
  //     legend: { position: 'top' },
  //     title: { display: true, text: 'Monthly Sales' }
  //   }
  // };

  // // Data for Bar Chart
  // const barData = {
  //   labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  //   datasets: [{
  //     label: 'Units Sold',
  //     data: [50, 75, 150, 100],
  //     backgroundColor: [
  //       'rgba(255, 99, 132, 0.2)',
  //       'rgba(255, 206, 86, 0.2)',
  //       'rgba(75, 192, 192, 0.2)',
  //       'rgba(153, 102, 255, 0.2)'
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(255, 206, 86, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(153, 102, 255, 1)'
  //     ],
  //     borderWidth: 1
  //   }]
  // };

  // const barOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: { position: 'top' },
  //     title: { display: true, text: 'Product Performance' }
  //   },
  //   scales: {
  //     y: { beginAtZero: true }
  //   }
  // };

  return (
    <Container className="pt-4"> 
      {/* Value Boxes */}
      <Row className="align-items-stretch">
        {/* Left Side: Large Card */}
        <Col md={4} className="mb-3 d-flex">
          <Card className="text-center flex-fill large-card value-box-first">
            <Card.Body className="d-flex flex-column justify-content-center">
              <Card.Title className="card-title-first">APS em números</Card.Title>
              <Card.Text className="card-text-first">(dados de abril/2024)</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Small Cards on the Right */}
        <Col md={8}>
          <Row>
            {/* First Row of Small Cards */}
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>57 mil Equipes</Card.Title>
                  <Card.Text>De saúde da família</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>5 mil Equipes</Card.Title>
                  <Card.Text>De atenção primária à saúde</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>22,8 milhões</Card.Title>
                  <Card.Text>de atendimentos médicos</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>12,7 milhões</Card.Title>
                  <Card.Text>de atendimentos de enfermeiros</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Row of Small Cards */}
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>63,6 milhões</Card.Title>
                  <Card.Text>de visitas domiciliares</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>4,6 milhões</Card.Title>
                  <Card.Text>De atendimentos odontológicos</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>9,2 milhões</Card.Title>
                  <Card.Text>de doses de vacinas aplicadas</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6} xs={12} className="mb-3">
              <Card className="text-center h-100">
                <Card.Body>
                  <Card.Title>62,8 milhões</Card.Title>
                  <Card.Text>de procedimentos realizados      </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
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
        <Button variant="primary" href="/dashboard">Ir para o Painel Interativo</Button>
      </div>

      {/* Gráficos PNG */}
      {/* Primeira linha */}
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>              
            <Card.Title>Evolução da despesa em APS pelos municípios</Card.Title>
              <img 
                src={imgEvDesp} 
                alt="Eficiência da despesa em APS" 
                className="img-fluid" 
              />
              <p>No terceiro quadrimestre de 2023 foram investidos quase 40 bilhões de reais, com a maior parte sendo originada de recurso próprio dos municípios.</p>
              <div className="mb-4"></div>  
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
            <Card.Title>Evolução dos indicadores de desempenho da APS</Card.Title>
              <img 
                src={imgEvPrev}
                alt="Evolução Previne Brasil" 
                className="img-fluid" 
              />
              <p>Os indicadores de desempenho da APS estavam em uma tendência crescente até o 2º quadrimestre de 2023. Aparentemente houve uma certa estabilização para a maioria deles nos quadrimestre posteriores, com exceção do indicador de vacinação.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Segunda linha */}
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
            <Card.Title>Evolução da morbimortalidade por CSAP</Card.Title>
              <img 
                src={imgMorbiMort}
                alt="Taxa de Mortalidade e Internações por CSAP (Brasil)" 
                className="img-fluid" 
              />            
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Terceira linha */}
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body> 
              <Card.Title>Evolução da eficiência de processos</Card.Title>
              <Row>
                <Col md={6}>
                  <img 
                    src={imgProcPortePop}
                    alt="Evolução da eficiência de Processos por Porte Populacional" 
                    className="img-fluid" 
                  />
                  <p>Já para o IVS, não há uma associação nítida da vulnerabilidade social e da eficiência de resultados. </p>
                </Col>
                <Col md={6}>
                  <img 
                    src={imgEfProcIvs} 
                    alt="Evolução da eficiência de Processos IVS" 
                    className="img-fluid" 
                  />
                  <p>Em geral, municípios com menos de 20 mil habitantes foram os mais eficientes em resultados. Na comparação entre todos os 5570 municípios. Ou seja, em média, eles apresentaram menores taxas de mortalidade e internações por CSAP diante da despesa mensal por equipe da APS investida. </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quarta linha */}
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body> 
              <Card.Title>Evolução da eficiência de resultados</Card.Title>
              <Row>
                <Col md={6}>
                  <img 
                    src={imgResPortePop}
                    alt="Evolução da eficiência de Resultados por Porte Populacional" 
                    classNam  e="img-fluid" 
                  />
                  <p>Em geral, municípios com menos de 20 mil habitantes foram os mais eficientes em resultados. Na comparação entre todos os 5570 municípios. Ou seja, em média, eles apresentaram menores taxas de mortalidade e internações por CSAP diante da despesa mensal por equipe da APS investida.</p>
                </Col>
                <Col md={6}>
                  <img 
                    src={imgEfResIvs} 
                    alt="Evolução da eficiência de Resultados IVS" 
                    className="img-fluid" 
                  />
                  <p>Já para o IVS, não há uma associação nítida da vulnerabilidade social e da eficiência de resultados.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row> 
      {/* Charts */}
                {/* <Row>
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
      </Row> */}
    </Container> 
  );
};

export default Home;