"use client";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

const MyNavbar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      collapseOnSelect
      fixed="top"
    >
      <Container>
        {/* Usar <Navbar.Brand> directamente */}
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Inicio</Nav.Link>
            </Link>
            <Link href="/proyectos" passHref legacyBehavior>
              <Nav.Link>Proyectos</Nav.Link>
            </Link>
            <Link href="/habilidades" passHref legacyBehavior>
              <Nav.Link>Habilidades</Nav.Link>
            </Link>
            <Link href="/experiencia" passHref legacyBehavior>
              <Nav.Link>Experiencia</Nav.Link>
            </Link>
            <Link href="/contacto" passHref legacyBehavior>
              <Nav.Link>Contacto</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;