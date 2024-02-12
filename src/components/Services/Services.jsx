// Assuming you have a separate CSS file for styling
import { CiClock2 } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
function Services() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (isAuthenticated) {
      // User is logged in, navigate to the checkout page
      navigate("/checkout");
    } else {
      // User is not logged in, redirect to login and set returnUrl
      loginWithRedirect({ authorizationParams: "/checkout" });
    }
  };
  return (
    <>
      <div className="container service-container border rounded p-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4">
            {/* First Row - Image */}
            <div className="row mb-3">
              <div className="col">
                <img
                  src="./Images/basic-service.png"
                  alt="basic"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Second Row - Pricing */}
            <div className="row">
              <div className="col">
                <p className="original-price text-muted">
                  Original Price: $5000
                </p>
                <p className="discounted-price text-danger font-weight-bold">
                  Discounted Price: $4000
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            {/* First Row - Service Title, SVG Icon, Duration */}
            <div className="row mb-3">
              <div className="col-md-6">
                <h4 className="service-info text-left">Basic Service</h4>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-end">
                {/* SVG Icon Here */}
                <CiClock2 />
                <p className="mb-2">4 hours taken</p>
              </div>
            </div>

            {/* Second Row - Specifications */}
            <div className="row mb-3">
              <div className="col-md-6">
                <ul className="list">
                  <li>Specification 1</li>
                  <li>Specification 2</li>
                </ul>
              </div>
            </div>

            {/* Last Row - Add to Cart Button */}
            <div className="row">
              <div className="col-md-6 offset-md-6 d-flex align-items-center justify-content-end">
                <button className="button" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
