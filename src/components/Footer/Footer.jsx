import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaCar } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
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
      </footer>
    </>
  );
}

export default Footer;
