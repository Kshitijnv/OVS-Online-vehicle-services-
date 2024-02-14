import { CiClock2 } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Services.css";
function ServicesCard(props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        if (cart.id === props.id) {
          // alert("!!!!Service is Already added to the cart!!!!, go to the cart");
          toast.warning("Service is Already added to the cart", {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.error("Only 1 Service can be choosen at a time", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } else {
        cart = props;
        // alert("Service is added to the cart successfully");
        toast.success("Service is added to the cart successfully", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        console.log(cart);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      // User is not logged in, redirect to login and set returnUrl
      loginWithRedirect();
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
      <ToastContainer />
    </>
  );
}

export default ServicesCard;
