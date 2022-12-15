import React from "react";
import { Form, Button, Row, ButtonToolbar, Col } from "react-bootstrap";
function SellerBuyer() {
  return (
    <div className="vh-100 w-100 mx-auto my-5">
      <Form className="w-25 mx-auto">
        <Form.Label className="fw-normal fs-5 mb-3">
          SATICI BİLGİLERİ
        </Form.Label>
        <Form.Group className="mb-4">
          <Row>
              <Col sm={4} className="fw-bold mb-3">Referans No</Col>
              <Col sm={1} className="mb-3">:</Col>
              <Col sm={5} className="mb-3">EPTCG56HG</Col>
          </Row>
          <Row>
              <Col sm={4} className="fw-bold mb-3">Adı Soyadı</Col>
              <Col sm={1} className="mb-3">:</Col>
              <Col sm={5} className="mb-3">EPTCG56HG</Col>
          </Row>
          <Row>
              <Col sm={4} className="fw-bold mb-3">Cep Telefonu</Col>
              <Col sm={1} className="mb-3">:</Col>
              <Col sm={5} className="mb-3">EPTCG56HG</Col>
          </Row>
          <Row>
              <Col sm={4} className="fw-bold mb-3">Araç Plakası</Col>
              <Col sm={1} className="mb-3">:</Col>
              <Col sm={5} className="mb-3">EPTCG56HG</Col>
          </Row>
          <Row>
              <Col sm={4} className="fw-bold mb-3">Satış Tutarı</Col>
              <Col sm={1} className="mb-3">:</Col>
              <Col sm={5} className="mb-3">EPTCG56HG</Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label className="fw-normal fs-5 mb-3">
            ALICI BİLGİLERİ
          </Form.Label>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option value="1">Gerçek Kişi</option>
            <option value="2">Tüzel Kişi</option>
          </Form.Select>
          <Form.Control
            type="text"
            placeholder="T.C. Kimlik Numarası"
            className="mb-3"
          />
          <Form.Control
            type="text"
            placeholder="Alıcı Adı Soyadı"
            className="mb-3"
          />
          <Form.Control
            type="text"
            placeholder="Cep Telefonu Numarası"
            className="mb-3"
          />
        </Form.Group>
        <Row>
          <ButtonToolbar className="justify-content-end mt-2">
            <Button variant="ligth" className="border-secondary">
              Vazgeç
            </Button>
            <Button variant="primary" className="mx-1">
              Devam
            </Button>
          </ButtonToolbar>
        </Row>
      </Form>
    </div>
  );
}

export default SellerBuyer;
