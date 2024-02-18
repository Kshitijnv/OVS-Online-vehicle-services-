import React from 'react';
import './ContactUs.css';
import { FaUser, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
const ContactUs = () => {
  return (
    
    <div className="contact-container">
      <div className="contact-form">
      <h2>Send us a message</h2>
        <form>
          <div className="form-group">
          <FaUser className="icon" style={{ color: 'green', fontSize: '24px' }}/>
            <input type="text" id="fullName" name="fullName" placeholder="Full Name" required />
          </div>
          <div className="form-group">
          <FaEnvelope className="icon" style={{ color: 'green', fontSize: '24px' }}/>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
          <FaMobileAlt className="icon" style={{ color: 'green', fontSize: '24px' }}/>
            <input type="tel" id="mobile" name="mobile" placeholder="Mobile" required />
          </div>
          <div className="form-group">&emsp;&emsp;&ensp;
            <textarea id="message" name="message" rows="4" placeholder="Message" required></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: 'green' }} >Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2 className='ourlocationtitle'>Our Location</h2>
        <div className="info-item">
        <i className="fas fa-map-marker-alt" style={{ color: 'green', fontSize: '24px' }} ></i>
          <span>53,Pashan,Pune,Mahrashtra,India.</span>
        </div>
        <div className="info-item">
          <i className="fas fa-mobile-alt" style={{ color: 'green' , fontSize: '24px' }} ></i>
          <span>+8596452153</span>
        </div>
        <div className="info-item">
          <i className="far fa-envelope" style={{ color: 'green' , fontSize: '24px'}} ></i>
          <span>mrbuddy@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
