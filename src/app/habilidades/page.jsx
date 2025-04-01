"use client"; // Necesario para componentes interactivos
import { Container, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import styles from './habilidades.css'; // Opcional para estilos personalizados

export default function Habilidades() {
  // Habilidades técnicas con nivel (0-100)
  const habilidadesTecnicas = [
    { nombre: 'React', nivel: 65 },
    { nombre: 'JavaScript', nivel: 75 },
    { nombre: 'Node.js', nivel: 50 },
    { nombre: 'Next.js', nivel: 50 },
    { nombre: 'Bootstrap', nivel: 80 },
    { nombre: 'Git', nivel: 90 }
  ];

  // Habilidades blandas
  const habilidadesBlandas = [
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Resolución de problemas',
    'Gestión del tiempo',
    'Adaptabilidad'
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Mis Habilidades</h1>
      
      {/* Sección Habilidades Técnicas */}
      <Card className="shadow-sm mb-5">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">
            <i className="bi bi-code-slash me-2"></i>
            Habilidades Técnicas
          </Card.Title>
          
          <Row>
            {habilidadesTecnicas.map((habilidad, index) => (
              <Col key={index} md={6} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>{habilidad.nombre}</span>
                  <span>{habilidad.nivel}%</span>
                </div>
                <ProgressBar 
                  now={habilidad.nivel} 
                  variant="success" 
                  animated 
                  className={styles.progressBar}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Sección Habilidades Blandas */}
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">
            <i className="bi bi-people-fill me-2"></i>
            Habilidades Blandas
          </Card.Title>
          
          <Row className="g-3">
            {habilidadesBlandas.map((habilidad, index) => (
              <Col key={index} xs={6} md={4} lg={3}>
                <Card className="h-100 border-0 bg-light">
                  <Card.Body className="text-center">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    {habilidad}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Sección Experiencia Profesional */}
      <Card className="shadow-sm mt-5">
        <Card.Body>
          <Card.Title as="h2" className="text-center mb-4">
            <i className="bi bi-briefcase-fill me-2"></i>
            Uso Profesional
          </Card.Title>
          
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Frontend</Card.Title>
                  <ul>
                    <li>Desarrollo de aplicaciones con React y Next.js</li>
                    <li>Maquetación responsive con Bootstrap</li>
                    <li>Optimización de rendimiento</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Backend</Card.Title>
                  <ul>
                    <li>APIs REST con Node.js</li>
                    <li>Autenticación JWT</li>
                    <li>Integración con bases de datos</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}