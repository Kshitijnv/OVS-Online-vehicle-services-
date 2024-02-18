import { FaClock, FaCalendarAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const OrderHistory = () => {
  const { user } = useAuth0();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:7070/appointments/all/${user.email}`
        );

        // Sort orders by date:
        const sortedOrders = response.data.sort((a, b) => {
          // Assuming pickUpDate is a string representing a date
          return new Date(a.pickUpDate) - new Date(b.pickUpDate);
        });

        setOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchData();
  }, [user.email]);

  const renderSlotBox = (dateString, timeString) => {
    try {
      const timeObject = JSON.parse(timeString);

      // Extracting startTime and endTime
      const { startTime, endTime } = timeObject;

      return (
        <div className="slot-box">
          <div className="slot-time">
            <FaClock /> {`${startTime}:00 - ${endTime}:00`}
          </div>
          <div className="slot-date">
            <FaCalendarAlt /> {dateString}
          </div>
        </div>
      );
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
  };

  const renderOrder = (order) => {
    const {
      vehicle: { manufacturer, yearOfManufacturer, fuelType },
      bill: { applicationFee },
      pickUpDate,
      pickUpTime,
      status,
      id,
    } = order;

    const orderCategory =
      status === "BOOKED" ? "ongoing-orders" : "completed-orders";

    return (
      <div key={id} className={`order-item ${orderCategory} card mb-3`}>
        <div className="order-details card-body">
          <p className="card-title h5">
            <strong>Model Name:</strong> {manufacturer}
          </p>
          <p>
            <strong>Manufacturer Year:</strong> {yearOfManufacturer}
          </p>
          <p>
            <strong>Fuel Type: </strong> {fuelType}
          </p>
          <p>
            <strong>Price:</strong> Rs.{applicationFee}
          </p>
          <Link to={`/order-details/${id}`} className="button details-button">
            Details
          </Link>
          <hr />
          <p className="slot card-subtitle mb-2 text-muted">Selected Slot</p>
          {renderSlotBox(pickUpDate, pickUpTime)}
          <p>
            <strong>Status:</strong>{" "}
            <span className={`status ${status.toLowerCase()}`}>{status}</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="order-history-container container mt-4">
      <div className="order-history-header">
        <h2>Order History</h2>
      </div>
      <div className="order-history-content">
        <div className="ongoing-orders">
          <h3>Ongoing Orders</h3>
          <hr />
          {orders.filter((order) => order.status === "BOOKED").map(renderOrder)}
        </div>
        <div className="completed-orders">
          <h3>Completed Orders</h3>
          <hr />
          {orders
            .filter((order) => order.status === "COMPLETED")
            .map(renderOrder)}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
