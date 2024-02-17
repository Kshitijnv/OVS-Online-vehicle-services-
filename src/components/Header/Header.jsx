import React, { useState } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [showCard, setShowCard] = useState(false);

  const handleCardToggle = () => {
    setShowCard(!showCard);
  };

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <Link to="/">
          <img src="./Images/Brandlogo.png" alt="logo" width={100} />
        </Link>
        <nav className="flexCenter h-menu">
          <Link to="/car-service">Car services</Link>
          <Link to="#">Insurance claim</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Vehicle lab</Link>
          {isAuthenticated && (
            <div className="welcome-box" onMouseEnter={handleCardToggle} onMouseLeave={handleCardToggle}>
              
                <span> Welcome, {user.name} </span>
        
              {showCard && (
                <div className="card">
                  <Link to="/profile">Profile</Link>
                  <Link to="/order-history">Order History</Link>
                  <Link to="/my-cars">My Cars</Link>
                  <Link to="/ManageAddress">Manage Address</Link>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                </div>
              )}
            </div>
          )}
          {isAuthenticated && <Link to="/cart">Cart</Link>}
        </nav>
      </div>
    </section>
  );
};

export default Header;
