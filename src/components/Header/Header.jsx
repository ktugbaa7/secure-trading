import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="head w-100 bg-light px-5 py-3 mb-5 border-bottom">
      <Link to="/" className="text-decoration-none">
        <h2 className="fw-light fs-1 text-dark">Güvenli Alım Satım</h2>
      </Link>
    </div>
  );
}

export default Header;
