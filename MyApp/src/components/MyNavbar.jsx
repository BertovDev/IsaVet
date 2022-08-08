import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Facebook, Instagram } from 'react-bootstrap-icons';

import logo from "/static/logo.jpeg"

export default function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className='sticky-top bg-white'>

      <Container className='w-100'>
        <Navbar.Brand href="#home" className='mt-2 fs-2'>
          {/* <span style={{ "color": "#8AD0DC" }}>Isa</span><span style={{ "color": "#1F4979" }}>Vet</span> */}
          <img src={logo} alt="" width="80"
            height="80"
            className="d-inline-block align-top" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto mt-2" ></Nav>
          <Nav.Link href="#about" className='mx-3' style={{ "color": "black" }}>Quienes Somos</Nav.Link>
          <Nav.Link href="#contact" className='mx-3' style={{ "color": "black" }}>Contacto</Nav.Link>
          <Nav.Link className='mx-3' href='https://www.facebook.com/isavetinsumos' target="_blank"><Facebook size={20} /> Facebook</Nav.Link>
          <Nav.Link className='mx-3' href='https://www.instagram.com/isavet.ins/?hl=es' target="_blank"><Instagram size={20} /> Instagram</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}
