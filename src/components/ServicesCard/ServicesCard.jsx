import { CiClock2 } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import "./Services.css";
function ServicesCard(props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (isAuthenticated) {
      // User is logged in, navigate to the checkout page
      navigate("/checkout", { state: { servicePrice: props.price } });
    } else {
      // User is not logged in, redirect to login and set returnUrl
      loginWithRedirect({
        authorizationParams: "/checkout",
      });
    }
  };
  return (
    <>
      <div className="container service-container border rounded p-4">
        <div className="row">
          <div className="col-md-2 left-container">
            <img
              src="./Images/basic-service.png"
              alt="basic"
              className="img-fluid"
            />
            <div>
              <span className="original-price text-muted strikethrough">
                Rs.{props.price - 400}
              </span>
              &nbsp;&nbsp;
              {/* Discounted Price */}
              <span className="discounted-price font-weight-bold">
                Rs.{props.price}
              </span>
            </div>
          </div>
          <div className="col-md-8 specification-container border rounded p-4">
            <h2>{props.name}</h2>
            {/* Specifications */}
            <div className="specs-list-container">
              <ul className="list">
                {props.specs.map((specification, index) => (
                  <li key={index}>
                    <IoIosStar /> {specification}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-2 right-container">
            <div className="hours-taken">
              <CiClock2 />
              {props.time} hours taken
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <button className="button" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
