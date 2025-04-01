"use client";
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.hero}>
      {/* Sección Hero */}
      <section className={`${styles.heroSection} py-5`}>
        <Container className="text-center">
          <div className={styles.avatarContainer}>
            <img 
              src="/avatar.jpg"
              alt="Mi avatar" 
              className={styles.avatar}
            />
          </div>
          <h1 className="display-4 fw-bold mt-4 mb-3">Jorge Grez González</h1>
          <p className="lead text-muted mb-4">
            Desarrollador Full Stack especializado en React y Next.js
          </p>
          
          <div className="d-flex justify-content-center gap-3 mb-5">
            <Button 
              variant="outline-primary" 
              size="lg" 
              as={Link} 
              href="/proyectos"
            >
              Ver Proyectos
            </Button>
            <Button 
              variant="primary" 
              size="lg" 
              as={Link} 
              href="contacto"
            >
              Contactar
            </Button>
          </div>

          {/* Stats */}
          <Row className={`${styles.stats} g-4 mb-5`}>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="display-5 text-primary mb-2">3+</div>
                  <Card.Text>Años de experiencia</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="display-5 text-primary mb-2">20+</div>
                  <Card.Text>Proyectos completados</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="display-5 text-primary mb-2">15+</div>
                  <Card.Text>Tecnologías dominadas</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Redes Sociales */}
          <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/nitaaaa" target="_blank" className={styles.socialLink}>
              <FiGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/jorge-grez-gonzalez/" target="_blank" className={styles.socialLink}>
              <FiLinkedin size={28} />
            </a>
            <a href="mailto:tu@email.com" className={styles.socialLink}>
              <FiMail size={28} />
            </a>
          </div>
        </Container>
      </section>

      {/* Tecnologías */}
      <section className="py-5 bg-light">
        <Container className="text-center">
          <h2 className="mb-5">Tecnologías Principales</h2>
          <Row className="g-4 justify-content-center">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech, i) => (
              <Col key={i} xs={6} md={4} lg={2}>
                <div className={`${styles.techCard} p-3`}>
                  <img 
                    src={`/tech-logos/${tech.toLowerCase()}.svg`}
                    alt={tech}
                    className="img-fluid"
                    style={{ height: '50px' }}
                  />
                  <div className="mt-2">{tech}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}