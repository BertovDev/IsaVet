import React, { useRef, useState } from 'react'
import { Col, Container, Row, Form, Modal } from 'react-bootstrap'
import emailjs from "emailjs-com"

import "../App.css"

import isaVetImg from "/static/logo.jpeg"

// Icons
import { Facebook, Instagram } from 'react-bootstrap-icons'

export default function Contact() {

    const [show, setShow] = useState(false)

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cfq9wg2', 'template_wr5214s', form.current, 'qzMl_8OvxgXCN0ZKd')
            .then((result) => {
                setShow(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id='contact' className='contactSection'>
            <Container >
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>Gracias por contactarse!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Su email fue enviado correctamente!</Modal.Body>
                    <Modal.Footer><button className='btn btn-success' onClick={() => setShow(false)}>Cerrar</button></Modal.Footer>
                </Modal>
                <Row>
                    <Col sm={12} md={6} xl={6} className="isavet_contact_logo">
                        <img src={isaVetImg} alt="" />
                    </Col>
                    <Col sm={12} md={6} xl={6}>
                        <h1>Pongámonos en contacto!</h1>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group>
                                <Row className="mt-5">

                                    <Col size={12} sm={6} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="floatingInputCustom"
                                                type="text"
                                                placeholder="name@example.com"
                                                name='name'
                                                required
                                            />
                                            <label htmlFor="floatingInputCustom">Nombre</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="floatingApellidoCustom"
                                                type="text"
                                                placeholder="Apellido"
                                                name="surname"
                                                required
                                            />
                                            <label htmlFor="floatingApellidoCustom">Apellido</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="floatingEmailCustom"
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                required
                                            />
                                            <label htmlFor="floatingEmailCustom">Email</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="floatingTelefonoCustom"
                                                type="tel"
                                                placeholder="Telefono"
                                                name="tel"
                                            />
                                            <label htmlFor="floatingTelefonoCustom">Telefono</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={12} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                id="floatingAsuntoCustom"
                                                type="text"
                                                placeholder="Asunto"
                                                name="subject"
                                                required
                                            />
                                            <label htmlFor="floatingAsuntoCustom">Asunto</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={12} className="px-1">
                                        <Form.Floating className="mb-3">
                                            <Form.Control
                                                as="textarea"
                                                id="floatingMensajeCustom"
                                                placeholder="Mensaje"
                                                style={{ height: '150px' }}
                                                name="message"
                                                required
                                            />
                                            <label htmlFor="floatingMensajeCustom">Mensaje</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col size={12} sm={12} className="d-flex justify-content-center">
                                        <button type="submit" value="send" className="btn myBtn">Enviar</button>
                                    </Col>
                                </Row>
                            </Form.Group>

                        </Form>

                    </Col>
                </Row>
                <Row className='d-flex text-center justify-content-center mt-5 border-top border-secondary'>

                    <Col size={12} md={12} className="my-3">
                        <a style={{ margin: "10px" }} href='https://www.facebook.com/isavetinsumos' target="_blank"><Facebook size={30} /></a>
                        <a style={{ margin: "10px" }} href='https://www.instagram.com/isavet.ins/?hl=es' target="_blank"><Instagram size={30} /></a>
                    </Col>
                    <Col size={12} md={3} className="my-2">
                        Buenos Aires, Argentina
                    </Col>
                    <Col size={12} md={3} className="my-2">
                        Email: isavet.ins@gmail.com
                    </Col>
                    <Col size={12} md={3} className="my-2">
                        Tel: +54 11 6143-9997
                    </Col>
       
                    <Col size={12} md={12}>
                        <h5>Isavet &reg; {new Date().getFullYear()}</h5>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}
