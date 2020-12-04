import React from "react";
import "./footer.css";
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCarSide,FaAddressCard ,FaCamera,} from "react-icons/fa";


const Footer=()=> {
  return (
    <div className="main-footer">
      <div className="container">
      <span className="Icons"><FaCarSide />
      <FaAddressCard /><FaCamera />&#10004;
      </span>
      </div>
    </div>
  )
}

export default Footer;