<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 16d397cd30d4f6e8ba0a1ee52ad9ab819844848d
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
<<<<<<< HEAD
  // const [cartDetails, setCartDetails] = useState(null);
  useEffect(() => {
    console.log("component render");
=======
  const [showCard, setShowCard] = useState(false);

  const handleCardToggle = () => {
    setShowCard(!showCard);
  };
>>>>>>> 16d397cd30d4f6e8ba0a1ee52ad9ab819844848d

    if (isAuthenticated) {
      // Store user information in sessionStorage
      async function fetchData() {
        if (user) {
          let userForDb = {
            username: user.sub,
            phoneNumber: user.phone_number,
            emailId: user.email,
            firstName: user.given_name,
            lastName: user.family_name,
            // service: JSON.parse(sessionStorage.getItem("cart")),
          };
          let response = await axios.post(
            `http://localhost:7070/users`,
            userForDb
          );
          sessionStorage.setItem("cart", JSON.stringify(response.data.service));
          console.log(response.data);
        }
      }
      sessionStorage.setItem("user", JSON.stringify(user));
      fetchData();
    }
  }, [isAuthenticated, user]);

  const loginHandler = () => {
    loginWithRedirect();
  };

  async function handleLogout() {
    // Store cart details in the backend before clearing
    // const cartDetails = JSON.parse(sessionStorage.getItem("cart"));
    // const cartData = JSON.stringify(cartDetails);
    let userForDb = {
      username: user.sub,
      phoneNumber: user.phone_number,
      emailId: user.email,
      firstName: user.given_name,
      lastName: user.family_name,
      service: JSON.parse(sessionStorage.getItem("cart")),
    };
    await axios.post(`http://localhost:7070/users/cart`, userForDb);
    sessionStorage.clear(); // Clear sessionStorage
    logoutSync();
  }
  const logoutSync = async () => {
    await logout({ logoutParams: { returnTo: window.location.origin } });
  };
  return (
    <section className="h-wrapper">
      <div className="h-container">
        <Link to="/">
          <img src="./Images/Brandlogo.png" alt="logo" width={100} />
        </Link>
        <nav className="flexCenter h-menu">
          <Link to="/car-selector">Car services</Link>
          <Link to="#">Insurance claim</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Vehicle lab</Link>
<<<<<<< HEAD
          {isAuthenticated && <p> Welcome, {user.name} </p>}
          {isAuthenticated ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <button onClick={loginHandler}>Log In</button>
=======
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
>>>>>>> 16d397cd30d4f6e8ba0a1ee52ad9ab819844848d
          )}
          {isAuthenticated && <Link to="/cart">Cart</Link>}
        </nav>
      </div>
    </section>
  );
};

export default Header;
