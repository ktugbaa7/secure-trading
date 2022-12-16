import React from 'react'
import { Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <div className="vh-100 w-100 mx-auto mt-5">
      <Form className="w-25 mx-auto">
        <Form.Group>
          <Form.Label className="fw-bold fs-5 mb-3">BAŞVURU İPTAL BİLGİLERİ</Form.Label>
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
            placeholder="Cep Telefonu Numarası"
            className="mb-3"
          />
          <Form.Control as="textarea" rows={4} className="mb-3" placeholder="İptal Nedeni"/>
          <Form.Control
            type="text"
            placeholder="Referans Numarası"
            className="mb-3"
          />
          <Link to="/alertcancel">
            <Button type="submit" variant="success" className="px-4 mb-4 w-100">
              İptal Et
            </Button>
          </Link>
          <Form.Group>
            <Alert.Link
              variant="danger"
              href="/"
              className="text-decoration-none text-success fs-6 fw-normal"
            >
              Referans Numaramı Unuttum
            </Alert.Link>
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Cancel