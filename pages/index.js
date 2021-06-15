import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <iframe width="350" height="250" src="https://www.youtube.com/embed/Vzo-EL_62fQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <Col>
            <p>Yay, it's fluid!</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Link href='/legs'>
            <img src='https://res.cloudinary.com/dejg3dz16/image/upload/v1623775652/depositphotos_50048481-stock-photo-mid-section-of-muscular-man_ev32lo.jpg' alt='' />
          </Link>
          <Col>
            <p>Legs Workout</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Link href='/arms'>
            <img src='https://res.cloudinary.com/dejg3dz16/image/upload/v1623776459/womanback_qqvpgq.jpg' alt='' />
          </Link>
          <Col>
            <p>Arms Workout</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Link href='/glutes'>
            <img src='https://res.cloudinary.com/dejg3dz16/image/upload/v1623776131/10-Best-Glute-Exercises-1024x576_ttlkfx.webp' alt='' />
          </Link>
          <Col>
            <p>Glutes Workout</p>
          </Col>
        </Row>
      </Container>
    </>

  )
}

