import React, { useEffect } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  // const [cartDetails, setCartDetails] = useState(null);
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
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./Images/Brandlogo.png" alt="logo" width={100} />
        </Link>
        <nav className="flexCenter h-menu">
          <Link to="/car-service">Car services</Link>
          <Link to="#">Insurance claim</Link>
          <Link to="#">Blog</Link>
          <Link to="#">Vehicle lab</Link>
          {isAuthenticated && <p> Welcome, {user.name} </p>}
          {isAuthenticated ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <button onClick={loginHandler}>Log In</button>
          )}
          {isAuthenticated && <Link to="/cart">Cart</Link>}
        </nav>
      </div>
    </section>
  );
};

export default Header;
