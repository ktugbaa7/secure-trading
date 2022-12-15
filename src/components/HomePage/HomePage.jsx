import React from 'react'
import { Col, Container, Row, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container fluid className="vh-100 w-75 mx-auto">
        <Row className="justify-content-center mb-2">
          <Col md="6">
            <Button type="submit" variant="info" size="lg" className="w-100">
              Satıcı Başvurusu Oluştur
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col md="6">
            <Button type="submit" variant="info" size="lg" className="w-100">
              Alıcı Başvurusu Oluştur
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col md={{ span: 5 }}>
            <Button type="submit" variant="info" size="lg" className="w-100">
              Başvuru Durum Sorgula
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 5 }}>
            <Button type="submit" variant="info" size="lg" className="w-100">
              Başvuru İptal
            </Button>
          </Col>
        </Row>
      </Container>
  )
}

export default HomePage