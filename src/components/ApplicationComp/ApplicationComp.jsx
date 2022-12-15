import React from 'react'
import { Alert, Button } from "react-bootstrap";
function ApplicationComp() {
  return (
    <div className="vh-100 w-100 pt-5">
      <Alert variant="success" className="w-25 mx-auto px-4 py-4">
        <Alert.Heading>Başvuru Tamamlandı!</Alert.Heading>
        <hr />
        <p>{} plakalı araç satışı için alıcı kaydınız oluşturulmuştur.</p> <br />
        <p>Transfer bilgileri, kayıtlı cep telefonu numaranıza SMS olarak gönderilmiştir.</p><br />
        <p>Araç satış bedelini, seçeceğiniz banka hesabına <p className='text-decoration-underline mb-0'>TRANSFER BİLGİLERİM alanındaki bilgiler ile</p>transfer etmeniz gerekmektedir.</p><br />
        <p>İsterseniz, satış bedelini parça parça banka hesaplarımıza <p className='text-decoration-underline mb-0'>TRANSFER BİLGİLERİM alanındaki bilgiler ile</p> transfer edebilirsiniz.</p>
        <div className="d-flex justify-content-center">
            <Button variant='outline-success' className='px-4'>Transfer Bilgilerimi Göster</Button>
        </div>
      </Alert>
    </div>
  )
}

export default ApplicationComp