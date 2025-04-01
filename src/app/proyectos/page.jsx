"use client";
import { Container, Card, Row, Col, Button, Badge } from 'react-bootstrap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';
import styles from './proyectos.css';

const proyectos = [
  {
    title: "Sistema de Gestión Médica",
    description: "Plataforma integral para administración de historiales médicos con Next.js y MongoDB",
    image: "/proyectos/sistema-medico.jpg",
    techs: ["React", "Next.js", "Node.js", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "E-commerce Moderno",
    description: "Tienda online con carrito de compras y pasarela de pagos integrada",
    image: "/proyectos/ecommerce.jpg",
    techs: ["React", "Redux", "Express", "PostgreSQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portal de Salud Comunitaria",
    description: "Sistema de citas médicas y telemedicina para el departamento de salud",
    image: "/proyectos/portal-salud.jpg",
    techs: ["Next.js", "TypeScript", "AWS", "Firebase"],
    github: "#",
    demo: "#"
  }
];

const allTechs = [...new Set(proyectos.flatMap(proyecto => proyecto.techs))];

export default function Proyectos() {
  const [selectedTech, setSelectedTech] = useState('Todas');

  const filteredProjects = selectedTech === 'Todas' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.techs.includes(selectedTech));

  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">Mis Proyectos</h1>
      
      {/* Filtros por tecnología */}
      <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center">
        <Button
          variant={selectedTech === 'Todas' ? 'primary' : 'outline-primary'}
          onClick={() => setSelectedTech('Todas')}
          className="mb-2"
        >
          Todas
        </Button>
        {allTechs.map((tech, index) => (
          <Button
            key={index}
            variant={selectedTech === tech ? 'primary' : 'outline-primary'}
            onClick={() => setSelectedTech(tech)}
            className="mb-2"
          >
            {tech}
          </Button>
        ))}
      </div>

      {/* Grid de proyectos */}
      <Row className="g-4">
        {filteredProjects.map((proyecto, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className={`${styles.projectCard} h-100 shadow-lg`}>
              <div className={styles.imageContainer}>
                <Card.Img 
                  variant="top" 
                  src={proyecto.image} 
                  className={styles.cardImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.techBadges}>
                    {proyecto.techs.map((tech, i) => (
                      <Badge key={i} bg="light" className="me-2 mb-2 text-dark">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proyecto.title}</Card.Title>
                <Card.Text>{proyecto.description}</Card.Text>
                <div className="mt-auto d-flex gap-2">
                  {proyecto.github && (
                    <Button 
                      variant="outline-primary" 
                      href={proyecto.github}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FiGithub className="me-2" /> Código
                    </Button>
                  )}
                  {proyecto.demo && (
                    <Button 
                      variant="primary" 
                      href={proyecto.demo}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FiExternalLink className="me-2" /> Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}