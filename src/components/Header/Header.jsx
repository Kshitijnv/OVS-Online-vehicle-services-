import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./Images/Brandlogo.png" alt="logo" width={100} />

        <nav className="flexCenter h-menu">
          <Link to="/car-service">Car services</Link>
          <Link to="#">Insurance claim</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Vehicle lab</Link>
          {isAuthenticated && <p> Welcome, {user.email} </p>}
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
        </nav>
      </div>
    </section>
  );
};

export default Header;
