import { FaClock, FaCalendarAlt } from "react-icons/fa"; // Import clock and calendar icons
import React from "react";
import "./OrderHistory.css"; // Import the styles
import { Link } from "react-router-dom";

const OrderHistory = () => {
  // Placeholder data for ongoing and completed orders
  const ongoingOrders = [
    {
      imageUrl: "./Images/Mahindra_Thar.jpg",
      modelName: "Mahindra Thar",
      fuelType: "Petrol",
      price: 1000,
      slot: "2022-02-14 10:00 AM",
      detailsLink: "/order-details/1",
      status: "In Progress",
    },
    // Add more ongoing orders as needed
  ];

  const completedOrders = [
    {
      imageUrl: "./Images/Maruti_Suzuki_FRONX.jpg",
      modelName: "Maruti Suzuki FRONX",
      fuelType: "CNG",
      price: 1500,
      slot: "2022-02-12 02:30 PM",
      detailsLink: "/order-details/2",
      status: "Completed",
    },
    // Add more completed orders as needed
  ];

  const renderSlotBox = (slot) => (
    <div className="slot-box">
      <div className="slot-time">
        <FaClock /> {slot.split(" ")[1]} {/* Extracting time from the slot */}
      </div>
      <div className="slot-date">
        <FaCalendarAlt /> {slot.split(" ")[0]} {/* Extracting date from the slot */}
      </div>
    </div>
  );

  return (
    <div className="order-history-container">
      <div className="order-history-header">
        <h2 className="order-history-title">Order History</h2>
        <Link to="/" className="btn-home">
          Home
        </Link>
      </div>
      <div className="order-history-content">
        <div className="ongoing-orders">
          <h3 className="orders">Ongoing Orders</h3>
          <hr></hr>
          {ongoingOrders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={`${process.env.PUBLIC_URL}${order.imageUrl}`} alt={`Car ${index + 1}`} />
              <div className="order-details">
                <p>Model Name: <strong>{order.modelName}</strong></p>
                <p>Fuel Type: {order.fuelType}</p>
                <p>Price: <strong>Rs.{order.price}</strong></p>
                <Link to={order.detailsLink}>Details</Link>
                <hr></hr>
                <p className="slot">Selected Slot</p>
                {renderSlotBox(order.slot)}
                
                <p>Status: <span className="status">{order.status}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="completed-orders">
          <h3 className="orders">Completed Orders</h3>
          <hr></hr>
          {completedOrders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={`${process.env.PUBLIC_URL}${order.imageUrl}`} alt={`Car ${index + 1}`} />
              <div className="order-details">
                <p>Model Name: <strong>{order.modelName}</strong></p>
                <p>Fuel Type: {order.fuelType}</p>
                <p>Price: <strong>Rs.{order.price}</strong></p>
                <Link to={order.detailsLink}>Details</Link>
                <hr></hr>
                <p className="slot">Selected Slot</p>
                {renderSlotBox(order.slot)}
                
                <p>Status: <span className="status">{order.status}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
