import React, { useEffect, useRef } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import gsap, { Power3 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import "../App.css"

import powerUltra from "/static/powerultra.jpg"
import comida from "/static/index.jpeg"
import img2 from "/static/index2.jpeg"

// Icons
import { Bag, Envelope, CheckCircleFill } from 'react-bootstrap-icons';


export default function About() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let ref = useRef()
    let infoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to(ref, { duration: 0, css: { visibility: "visible" } })

        const h1 = infoRef.current.firstChild
        const h3 = infoRef.current.children[1]
        const p = infoRef.current.children[2]

        gsap.from([h1, h3, p], {
            scrollTrigger: {
                trigger: infoRef.current,
                start: "top center",
            },
            duration: 2,
            x: 100,
            ease: Power3.easeOut,
            opacity: 0,
            stagger: .5
        }, .1)
    })

    return (

        <section id='about' className='aboutSection' ref={el => ref = el}>
            <Container className='center-in-section'>
                <Row className='align-items-center text-center'>
                    <h1  >¿Quiénes Somos?</h1>

                    <Col xs={12} md={12} xl={6} ref={infoRef} >
                        <h2>Somos una distribuidora de productos veterinarios</h2>
                        <p className='info'>Nos dedicamos a la comercialización de insumos veterinarios para pequeños y medianos animales.Contamos con más de diez laboratorios de
                            <span > alta confianza</span> <CheckCircleFill size={25} color="#124C5F" />.
                            <br/> para poder proveer a distintos negocios como pet shop y veterinarias del país, entre otros.
                            <br /> Realizamos envíos a todo el país.
                            <br />Chequea nuestro catálogo o mandamos un mensaje!</p>

                        <div className='about_buttons'>
                            <button className='btn myBtn' >
                                <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
                                    Contactanos <Envelope />
                                </a>
                            </button>
                            <button className='btn myBtn'>
                                <a href='https://wa.me/c/5491161439997' target="_blank" style={{ textDecoration: "none", color: "white" }} >
                                    Ver Productos <Bag />
                                </a>

                            </button>
                        </div>

                    </Col>
                    <Col xs={12} md={12} xl={6} >
                        <Carousel className='slider' dynamicHeight={true} infiniteLoop={true} showThumbs={false} autoPlay showStatus={false} >
                            <div className='item'>
                                <img src={comida} alt="" />
                                <span>Alimentos</span>
                            </div>
                            <div className='item'>
                                <img src={powerUltra} alt="" />
                                <span>Pipetas</span>
                            </div>
                            <div className='item'>
                                <img src={img2} alt="" />
                                <span>Comprimidos</span>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}







