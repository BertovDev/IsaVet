import React, { useRef,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightShort } from 'react-bootstrap-icons'

import gsap, { Power3 } from 'gsap'

import "../App.css"

import homeImg from "/static/blob2.png"



export default function Home() {

  let ref = useRef()
  let image = useRef()

  let tl = gsap.timeline();

  useEffect(() => {

    gsap.to(ref, { duration: 0, css: { visibility: "visible" } })

    tl.from(image.current, { y: 1280, duration: 1, ease: Power3.easeOut,opacity:0 })

    tl.from([".home-tittle", ".home-txt"], {
      duration: 1,
      x : 100,
      ease: Power3.easeOut,
      opacity: 0,
      delay: .8,
      stagger: .3
    }, .1)
      .from(".ver_mas_button", {
        duration: 1,
        y: 100,
        ease: Power3.easeOut,
        opacity: 0
      })


  }, [])

  return (
    <section className='banner' id='home' ref={el => ref = el}>
      <Container>
        <Row className='align-items-center ' >
          <Col xs={12} md={12} xl={6} className="" >
            <img className='img-fluid' ref={image} src={homeImg} alt="" />
          </Col>

          <Col xs={12} md={12} xl={6} >
            <Col xs={12} md={12} xl={12}>
              <h1 className='home-tittle'>Dale <span style={{ color: "#1F4979" }}>lo Mejor</span> a tu mascota</h1>
              <h3 className='home-txt'>Somos <span style={{ color: "#1F4979" }}>IsaVet</span> distribuidora de productos veterinarios</h3>
            </Col>

            <Col className='ver_mas_button' xs={12} md={12} xl={12}>
              <button className='btn'>
                <a href="#about" style={{ textDecoration: "none", color: "white" }}>
                  Ver Más
                </a>
                <ArrowRightShort size={30} />
              </button>

            </Col>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

