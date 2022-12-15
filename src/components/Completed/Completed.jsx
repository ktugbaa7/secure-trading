import React from "react";
import { Alert } from "react-bootstrap";
function Completed() {
  return (
    <div className="vh-100 w-100 pt-5">
      <Alert variant="success" className="w-50 mx-auto px-4 py-4">
        <Alert.Heading>Başvuru Tamamlandı!</Alert.Heading>
        <hr />
        <p>
          Başvuru bilgileriniz sistemde kayıtlı cep telefonu numaranıza
          gönderilmiştir.
        </p>
        <hr />
        <Alert.Link
          className="text-decoration-none text-success fw-normal"
          href="/"
        >
          Ana Sayfaya Dön
        </Alert.Link>
      </Alert>
    </div>
  );
}

export default Completed;
