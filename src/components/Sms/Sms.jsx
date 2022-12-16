import React ,{ useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Sms() {
  const [timer, setTimer] = useState(200);
  useEffect(() => {
    if(timer !== 0) {
        const interval = setInterval(() =>{
        setTimer(timer-1);
    }, 1000) 
    return () => clearInterval(interval);
    } 
  }, [timer])

  return (
    <div className="w-100 mx-auto mt-5">
      <Form className="w-25 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4 mb-3">
            Sms Onay Kodunu Giriniz.
          </Form.Label>
          <Form.Control type="text" placeholder="Onay Kodu" />
          <Link to="/applicationcomp">
          <Button variant="success" type="submit" className="mt-3 px-4">
            Doğrula
          </Button></Link>
        </Form.Group>
        <Form.Label className="fw-bold text-success">{timer} SN.</Form.Label>
      </Form>
      
    </div>
  );
}

export default Sms;
