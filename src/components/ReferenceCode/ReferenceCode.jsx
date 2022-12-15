import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
function ReferenceCode() {
  return (
    <div className="vh-100 w-100 mx-auto mt-5">
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 mb-3">Referans Kodunu Giriniz.</Form.Label>
          <Form.Control type="text" placeholder="Referans Numarası" />
          <Button variant="primary" type="submit" className="mt-3 px-4">
            Tamam
          </Button>
        </Form.Group>
        <Alert.Link
          variant="success"
          href="/"
          className="text-decoration-none fs-6 text-primary fw-normal"
        >
          Referans Numaramı Unuttum
        </Alert.Link>
        <Form.Group className="mt-4">
          <Form.Text className="text-muted">
            *Alıcı referans kodu satıcı tarafından oluşturulmaktadır.
          </Form.Text>
          <br />
          <Form.Text className="text-muted">
            *Lütfen satıcı kişi ile ParamGüvende hesabı ile ilgili iletişime
            geçiniz.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ReferenceCode;
