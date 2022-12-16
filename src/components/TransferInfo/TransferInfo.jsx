import React from "react";
import { Form, Button, Row } from "react-bootstrap";
function TransferInfo() {
  return (
    <div className="vh-100 w-100 mx-auto mt-5">
      <Form className="w-25 mx-auto rounded border border-primary px-2">
        <Form.Group>
          <Form.Label className="fw-normal fs-5 mb-3">
            TRANSFER BİLGİLERİM
          </Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="mb-3 border-primary"
            size="lg"
          >
            <option>Banka Hesabı seçiniz...</option>
            <option value="1">Ziraat Bankası</option>
            <option value="2">Türkiye İş Bankası</option>
            <option value="3">ING Bank</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Row>
            <Form.Label className="fw-bold mb-3">
              TRANSFER YAPILACAK ALICI ÜNVANI
            </Form.Label>
          </Row>

          <Form.Control
            type="text"
            placeholder=""
            size="sm"
            className="border-primary mb-3"
          />
          <Row>
            <Form.Label className="fw-bold mb-3">TRANSFER AÇIKLAMASI</Form.Label>
            <Form.Label className="fw-normal mb-3">Araç Bedeli</Form.Label>
            <Form.Label className="fw-bold mb-3">TRANSFER TUTARI</Form.Label>
            <Form.Label className="fw-normal mb-3">50.000,00 TL</Form.Label>
            <Form.Label className="fw-bold mb-3">MASRAF TUTARI</Form.Label>
            <Form.Label className="fw-normal mb-3">14 TL</Form.Label>
          </Row>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button type="submit" variant="primary" className="px-4 mb-4">
            Tamam
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default TransferInfo;
