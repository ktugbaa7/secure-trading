import React from "react";
import { Alert } from "react-bootstrap";
function AlertCancel() {
  return (
    <div className="vh-100 w-100 pt-5">
      <Alert variant="success" className="w-50 mx-auto px-4 py-4">
        <Alert.Heading>İptal İşlemi Tamamlandı!</Alert.Heading>
        <hr />
        <p>{} referans kodlu başvurunuz iptal edilmiştir.</p>
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

export default AlertCancel;
