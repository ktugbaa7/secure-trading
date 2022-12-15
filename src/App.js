import "bootstrap/dist/css/bootstrap.min.css";
import AlertCancel from "./components/AlertCancel/AlertCancel";
import ApplicationComp from "./components/ApplicationComp/ApplicationComp";
import Cancel from "./components/Cancel/Cancel";
import Completed from "./components/Completed/Completed";
import HomePage from "./components/HomePage/HomePage";
import ReferenceCode from "./components/ReferenceCode/ReferenceCode";
import Request from "./components/Request/Request";
import Seller from "./components/Seller/Seller";
import SellerBuyer from "./components/SellerBuyer/SellerBuyer";
import Sms from "./components/Sms/Sms";
import TransferInfo from "./components/TransferInfo/TransferInfo";
import Verification from "./components/Verification/Verification";
// import Buyer from "./components/Buyer/Buyer";
// import Cancel from "./components/Cancel/Cancel";
// import Request from "./components/Request/Request";

function App() {
  return (
    <div>
      
      <HomePage />
      <Seller />
      <Verification />
      <Completed />
      <Request />
      <ReferenceCode />
      <Sms />
      <Cancel />
      <AlertCancel />
      <SellerBuyer />
      <ApplicationComp />
      <TransferInfo />
      
    </div>
  );
}

export default App;
