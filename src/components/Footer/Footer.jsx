import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <span class="logo_name">Mr Buddy</span>
            </div>
            <div class="media-icons">
              <Link to="#">
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-twitter"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-instagram"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#">
                <i class="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">Company</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">About us</Link>
              </li>
              <li>
                <Link to="#">Get started</Link>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
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
            <ul class="box">
              <li class="link_name">Account</li>
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
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright © 2024 <Link to="#">Mr Buddy </Link>All rights reserved
            </span>
            <span class="policy_terms">
              <Link to="#">Privacy policy</Link>
              <Link to="#">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
      {/* <footer>
        <h2>
          <FaCar /> Mr Buddy
        </h2>
        <p>Pashan panchavati Acts CDAC Innovation park, pune</p>
        <div className="social">
          <TiSocialFacebook />
          <SlSocialInstagram />
          <TiSocialTwitter />
          <TiSocialYoutube />
        </div>

        <table>
          <tbody>
            <tr>
              <td>
                <MdOutlineMailOutline />
                Email
              </td>
              <td>abc@gmail.com</td>
            </tr>
            <tr>
              <td>
                <MdOutlineLocalPhone />
                Phone
              </td>
              <td>123-456-7890</td>
            </tr>
            <tr>
              <td>
                <VscCalendar />
                Working Days
              </td>
              <td>Monday-Sunday</td>
            </tr>
            <tr>
              <td>
                <IoMdTime />
                Working Hours
              </td>
              <td>7:00AM - 9:00PM(IST)</td>
            </tr>
          </tbody>
        </table>
        <p>&copy; 2024 Online Vehicle Service All rights reserved</p>
      </footer> */}
    </>
  );
}

export default Footer;
