import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlertCancel from "./components/AlertCancel/AlertCancel";
import ApplicationComp from "./components/ApplicationComp/ApplicationComp";
import Cancel from "./components/Cancel/Cancel";
import Completed from "./components/Completed/Completed";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import ReferenceCode from "./components/ReferenceCode/ReferenceCode";
import Request from "./components/Request/Request";
import Seller from "./components/Seller/Seller";
import SellerBuyer from "./components/SellerBuyer/SellerBuyer";
import Sms from "./components/Sms/Sms";
import TransferInfo from "./components/TransferInfo/TransferInfo";
import Verification from "./components/Verification/Verification"
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
              <div>
                <HomePage />
              </div>
            }
          />
          <Route path="/seller" element={<Seller />} />
          <Route path="/referencecode" element={<ReferenceCode />} />
          <Route path="/request" element={<Request />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/sellerbuyer" element={<SellerBuyer/>} />
          <Route path="/sms" element={<Sms />} />
          <Route path="/applicationcomp" element={<ApplicationComp />} />
          <Route path="/transferinfo" element={<TransferInfo />} />
          <Route path="/alertcancel" element={<AlertCancel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
