import React, { useEffect } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  useEffect(() => {
    console.log("component render");
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
          };
          let response = await axios.post(
            `http://localhost:7070/users`,
            userForDb
          );
          console.log(response.data);
          if (response.data.cart != null) {
            sessionStorage.setItem(
              "cart",
              JSON.stringify(response.data.cart.carServices)
            );
          }
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
    let carService;
    if (JSON.parse(sessionStorage.getItem("cart")) != null) {
      carService = JSON.parse(sessionStorage.getItem("cart")).serviceId;
    }
    let userForDb = {
      username: user.sub,
      serviceId: carService,
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
          <Link to="/">Home</Link>
          <Link to="/car-selector">Car services</Link>
          <Link to="/ContactUs">Contact Us</Link>
          {isAuthenticated && user.email === "admin@gmail.com" ? (
            <>
              <Link to="/appointments">Appointments Booked</Link>
              <Link to="#" onClick={handleLogout}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              {isAuthenticated && <Link to="/cart">Cart</Link>}

              {isAuthenticated ? (
                <></>
              ) : (
                <button onClick={loginHandler}>Log In</button>
              )}
              {isAuthenticated && (
                <div className="dropdown">
                  <span>Welcome, {user.name}</span>
                  <div className="dropdown-content">
                    <Link to="profile">Profile</Link>
                    <Link to="order-history">Order History</Link>
                    <Link to="my-cars">My Cars</Link>
                    <Link to="ManageAddress">Manage Address</Link>
                    <Link to="#" onClick={handleLogout}>
                      Log Out
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </nav>
      </div>
    </section>
  );
};
export default Header;
