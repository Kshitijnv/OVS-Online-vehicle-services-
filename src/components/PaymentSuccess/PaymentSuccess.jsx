import "./PaymentSuccess.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const PaymentSuccess = () => {
  const location = useLocation();
  const orderId = location.state?.razorOrderId || null; // Retrieve order ID from state
  const [orderDetails, setOrderDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:7070/order/${orderId}`
        );
        setOrderDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Hide loading indicator
      }
    };
    fetchOrderDetails();
  }, [orderId]);
  // Display order details dynamically

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading order details...</div>
      ) : error ? (
        <div className="error">
          Error fetching order details: {error.message}
        </div>
      ) : (
        <div className="container border m-5">
          <div className="row">
            <div className="col-md-12">
              <div className="first-row">
                <h1>Payment Successful!</h1>
                <img
                  src="./Images/checkmark.png"
                  alt="checkmark successful"
                  className="checkmark"
                />
              </div>
              <p>Thank you for your booking.</p>
            </div>
          </div>
          <div className="row transaction">
            <div className="col-md-6">
              <p>Order ID</p>
              <p>Amount</p>
              <p>Transaction Date</p>
            </div>
            <div className="col-md-6">
              <p>{orderId}</p>
              <p>{orderDetails.applicationFee}</p>
              <p>{orderDetails.transactionDate}</p>
            </div>
          </div>
          <Link to="/">
            <button className="button">Back To Home</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default PaymentSuccess;
