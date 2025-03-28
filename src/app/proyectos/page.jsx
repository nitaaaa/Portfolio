"use client";
import { Container, Card, Row, Col } from 'react-bootstrap'; // Importar Card
import MyNavbar from '@/components/Navbar';

export default function Proyectos() {
  const proyectos = [
    {
      title: "Tienda Online",
      description: "E-commerce desarrollado con React y Node.js.",
      image: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png",
    },
    {
      title: "Blog Personal",
      description: "Plataforma de blog con Next.js y Markdown.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <main>
      <Container className="my-5">
        <h1 className="text-center mb-4">Mis Proyectos</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {proyectos.map((proyecto, index) => (
            <Col key={index}>
              <Card className="h-100 shadow">
                {/* Card.Img está correctamente importado */}


                <Card.Img variant="top" src={proyecto.image} />
                <Card.Body>
                  <Card.Title>{proyecto.title}</Card.Title>
                  <Card.Text>{proyecto.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}