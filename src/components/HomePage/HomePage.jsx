import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container fluid className="w-75 mx-auto pt-5">
      <Row className="justify-content-center mb-2">
        <Col md="6">
          <Link to="/seller">
            <Button
              type="submit"
              variant="info"
              size="lg"
              className="w-100 text-secondary"
            >
              Satıcı Başvurusu Oluştur
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        <Col md="6">
          <Link to="/referencecode">
            <Button
              type="submit"
              variant="info"
              size="lg"
              className="w-100 text-secondary"
            >
              Alıcı Başvurusu Oluştur
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center mb-2">
        <Col md="6">
          <Link to="/request">
            <Button
              type="submit"
              variant="info"
              size="lg"
              className="w-100 text-secondary"
            >
              Başvuru Durum Sorgula
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="6">
          <Link to="cancel">
            <Button
              type="submit"
              variant="info"
              size="lg"
              className="w-100 text-secondary"
            >
              Başvuru İptal
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
