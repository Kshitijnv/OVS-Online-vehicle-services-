import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/932f9bb8-9e49-4742-9310-653c21333279/d1mao0x-63221e5c-9392-44dc-b098-851a4c791bf2.jpg"
          alt="logo"
          width={40}
        />

        <nav className="flexCenter h-menu">
          <a href="#">Car services</a>
          <a href="#">Insurance claim</a>
          <a href="#">Blog</a>
          <a href="#">Vehicle lab</a>
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
