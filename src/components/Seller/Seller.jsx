import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function Seller() {
  return (
    <div className="vh-100 w-50 mx-auto mt-2">
      <h1>ARAÇ ÖDEME TALEP FORMU</h1>
      <Form>
        <Row>
          <Col>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option value="1">Gerçek Kişi</option>
              <option value="2">Tüzel Kişi</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control type="number" placeholder="T.C. Kimlik Numarası" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Satıcı Adı ve Soyadı" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control
                type="number"
                placeholder="Satıcı Cep Telefonu Numarası"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Satıcı E-Posta Adresi" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control
                type="number"
                placeholder="Alıcı Cep Telefonu Numarası"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Alıcı E-Posta Adresi" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicIban">
              <Form.Control type="text" placeholder="Satıcı IBAN" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Araç Plakası" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Control type="number" placeholder="Satış Tutarı" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Tarafıma hizmet sunulması amacıyla, bulut tabanlı yazılımların yurt dışında tutulması nedeniyle kişisel verilerimin yurt dışına aktarılmasına ilişkin Açık Rıza Metni'ni okudum. Kişisel verilerimin bu kapsamda aktarılmasına onay veriyorum."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="TURK Elektronik Para A.Ş. tarafından; yukarıda yer alan iletişim bilgilerime bilgilendirme, mal ve hizmet tanıtımı, reklam ve promosyon gibi amaçlarla yararlı olabilecek içeriklere ulaşabilmem için ticari elektronik ileti gönderilmesini her zaman reddetme hakkımın saklı olduğunu bilerek onay veriyorum."
          />
        </Form.Group>
        <Row>
          <Form.Text id="linkBlock" className="mb-3">
            Kişisel verileriniz, talebinizin gerçekleştirilmesi amacıyla 6698
            Sayılı Kanun kapsamında işlenmektedir. Aydınlatma Metnine{" "}
            <a href="/">buradan</a> ulaşabilirsiniz.
          </Form.Text>

          <Col>
            <Button type="submit" variant="success" className="px-4">
              Talep Oluştur
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Seller;
