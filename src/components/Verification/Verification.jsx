import React from "react";
import { Form, Button, Row, ButtonToolbar, CloseButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function Verification() {
  return (
    <div className="vh-100 w-100 mx-auto mt-5">
      <div className="w-25 mx-auto">
        <Row className="justify-content-end">
          <CloseButton aria-label="Hide" />
        </Row>

        <h4>Sms Doğrulama</h4>
        <div className="border-top border-bottom py-4 mb-2 mt-4">
          <Form.Label htmlFor="inputVerification" className="mt-4">
            Sms Doğrulama Kodu:
          </Form.Label>
          <Form.Control type="password" className="mb-3" />
          <Form.Text id="verificationBlock" muted>
            Cep telefonunuza gönderilen sms içerisindeki doğrulama kodunu
            giriniz.
          </Form.Text>{" "}
        </div>
        <Row>
          <ButtonToolbar className="justify-content-end mt-2">
            <Link to="/">
              <Button variant="ligth" className="border-secondary">
                Vazgeç
              </Button>
            </Link>
            <Link to="/completed">
              <Button variant="warning" className="mx-1">
                Devam
              </Button>
            </Link>
          </ButtonToolbar>
        </Row>
      </div>
    </div>
  );
}

export default Verification;
