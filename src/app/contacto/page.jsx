"use client";
import { Container, Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import { FiSend, FiMail, FiCheckSquare } from 'react-icons/fi';
import { useState } from 'react';
import styles from './contacto.css';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <Container className={`${styles.contactSection} my-5`}>
      <h1 className="text-center mb-5">Contáctame</h1>
      
      <Card className="shadow-lg border-0">
        <Card.Body className="p-4 p-md-5">
          <Row className="g-5">
            {/* Formulario */}
            <Col md={7}>
              {showSuccess && (
                <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>Nombre completo</Form.Label>
                  <Form.Control 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Asunto</Form.Label>
                  <Form.Select 
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="trabajo">Oferta de trabajo</option>
                    <option value="proyecto">Propuesta de proyecto</option>
                    <option value="consulta">Consulta general</option>
                    <option value="comentario">Comentario</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check 
                    type="checkbox"
                    label="Deseo suscribirme al boletín informativo"
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                    className={styles.customCheckbox}
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2"
                >
                  <FiSend className="me-2" /> Enviar mensaje
                </Button>
              </Form>
            </Col>

            {/* Información de contacto */}
            <Col md={5} className={styles.contactInfo}>
              <div className="mb-5">
                <FiMail size={28} className="text-primary mb-3" />
                <h4>Información de contacto</h4>
                <p className="text-muted">
                  ¿Prefieres contactarme directamente?<br />
                  Escríbeme a: <br />
                  <a href="mailto:tucorreo@ejemplo.com" className="text-primary">
                    jorgegonz101@gmail.com
                  </a>
                </p>
              </div>

              <div className={styles.newsletterInfo}>
                <FiCheckSquare size={24} className="text-primary mb-3" />
                <h5>Boletín informativo</h5>
                <p className="text-muted small">
                  Al suscribirte recibirás actualizaciones mensuales sobre:
                </p>
                <ul className={styles.newsletterList}>
                  <li>Nuevos proyectos desarrollados</li>
                  <li>Tutoriales y artículos técnicos</li>
                  <li>Ofertas exclusivas</li>
                  <li>Novedades tecnológicas</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}