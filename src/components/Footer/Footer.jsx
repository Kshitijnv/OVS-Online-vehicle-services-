import "./Footer.css";
import { Link } from "react-router-dom";
import React from 'react';


function Footer() {
  return (
    <>
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <i className="fab fa-slack"></i>
              <span className="logo_name">Mr Buddy</span>
            </div>
            <div className="media-icons">
              <Link to="#">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-youtube"></i>
<<<<<<< HEAD
              </Link>
              <Link>
                <i className="fab fa-github"></i>
=======
>>>>>>> 16d397cd30d4f6e8ba0a1ee52ad9ab819844848d
              </Link>
            </div>
          </div>
          <div className="link-boxes">
            <ul className="box">
              <li className="link_name">Company</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Get started</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Services</li>
              <li>
                <Link to="/car-service">AC Services</Link>
              </li>
              <li>
                <Link to="/car-service">Scheduled Services</Link>
              </li>
              <li>
                <Link to="/car-service">Denting Painting</Link>
              </li>
              <li>
                <Link to="/car-service">Lights & Fitments</Link>
              </li>
            </ul>
            <ul className="box">
              <li className="link_name">Account</li>
              <li>
                <Link to="#">Profile</Link>
              </li>
              <li>
                <Link to="#">My account</Link>
              </li>
              <li>
                <Link to="#">Prefrences</Link>
              </li>
              <li>
                <Link to="#">Purchase</Link>
              </li>
            </ul>
            <ul className="box input-box">
              <li className="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text">
              Copyright © 2024 <Link to="#">Mr Buddy </Link>All rights reserved
            </span>
            <span className="policy_terms">
              <Link to="#">Privacy policy</Link>
              <Link to="#">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
<<<<<<< HEAD
    </>
=======
         </>
>>>>>>> 16d397cd30d4f6e8ba0a1ee52ad9ab819844848d
  );
}

export default Footer;
