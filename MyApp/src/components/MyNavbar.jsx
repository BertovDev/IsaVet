import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='sticky-top bg-white'>

      <Container className='w-100'>
        <Navbar.Brand href="#home" className='mt-2 fs-2'><span style={{ "color": "#8AD0DC" }}>Isa</span><span style={{ "color": "#1F4979" }}>Vet</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto mt-2" ></Nav>
          <Nav.Link href="#about" className='mx-3' style={{ "color": "black" }}>Quienes Somos</Nav.Link>
          <Nav.Link href="#features" className='mx-3' style={{ "color": "black" }}>Productos</Nav.Link>
          <Nav.Link href="#footer" className='mx-3' style={{ "color": "black" }}>Contacto</Nav.Link>
          <Nav.Link href="#pricing" className='mx-3' style={{ "color": "black" }}>Carrito</Nav.Link>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  )
}
