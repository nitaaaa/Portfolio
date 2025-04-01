"use client";
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FiBriefcase, FiCode } from 'react-icons/fi';
import styles from './experiencia.css';

export default function Experiencia() {
  const experiencias = [
    {
      puesto: "Soporte TI",
      empresa: "Departamento de Salud de Puerto Montt",
      periodo: "2022 - 2024 (2 años)",
      responsabilidades: [
        "Mantenimiento y soporte de infraestructura tecnológica",
        "Gestión de redes y sistemas informáticos",
        "Soporte técnico a usuarios finales",
        "Administración de sistemas de información en salud"
      ],
      icono: <FiBriefcase size={24} className="text-primary" />
    },
    {
      puesto: "Desarrollador Full Stack",
      empresa: "Departamento de Salud de Puerto Montt",
      periodo: "2024 - Presente (1 año)",
      responsabilidades: [
        "Desarrollo de aplicaciones web para gestión médica",
        "Implementación de sistemas con React y Node.js",
        "Integración con bases de datos clínicas",
        "Optimización de procesos mediante soluciones tecnológicas"
      ],
      icono: <FiCode size={24} className="text-primary" />
    }
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Experiencia Profesional</h1>
      
      <div className={styles.timeline}>
        {experiencias.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <Card className={`${styles.timelineCard} shadow-sm mb-4`}>
              <Card.Body>
                <Row>
                  <Col md={4} className="text-center mb-3 mb-md-0">
                    <div className={styles.timelineIcon}>
                      {exp.icono}
                    </div>
                    <h5 className="mt-2">{exp.puesto}</h5>
                    <p className="text-muted small mb-0">{exp.empresa}</p>
                    <p className="text-muted small">{exp.periodo}</p>
                  </Col>
                  
                  <Col md={8}>
                    <h5 className="text-primary">Principales responsabilidades:</h5>
                    <ul className={styles.responsibilitiesList}>
                      {exp.responsabilidades.map((item, i) => (
                        <li key={i} className="mb-2">
                          <span className="text-primary">▹</span> {item}
                        </li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}