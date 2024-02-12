import React, { useState } from "react";
import "./Checkout.css";
import AddressSection from "../Address/AddressSection";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

function Checkout() {
  const { user } = useAuth0();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isOrderReady, setIsOrderReady] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Function to update selected date
  const handleDateClick = (date) => {
    setSelectedDate(date);
    validateOrder(); // Trigger validation when date changes
  };

  // Function to update selected time slot
  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    validateOrder(); // Trigger validation when time slot changes
  };
  // Function to validate order readiness
  const validateOrder = () => {
    // Perform validation logic based on your requirements
    const isReady = selectedDate && selectedTimeSlot; // Add more conditions as needed

    setIsOrderReady(isReady);
  };
  // Retrieve the location object
  const location = useLocation();

  // Access the service price from the location state
  const servicePrice = location.state?.servicePrice || 0;
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const createOrder = async () => {
    if (isOrderReady) {
      // Perform actions when the "Place an Order" button is clicked
      // You can use the userAddress, selectedDate, selectedTimeSlot, etc.
      console.log("button clicked");
      let orderId =
        "OD" +
        Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));

      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      let paymentRes = {
        order_id: orderId,
        amount: servicePrice,
        currency: "INR",
        payment_capture: 1,
        customerName: user.name,
        phoneNumber: user.phone_number,
        email: user.email,
      };
      let result = await axios.post(
        "http://localhost:7070/createOrder",
        paymentRes
      );
      console.log("----->", result);

      const options = {
        key: "rzp_test_VZSwPOBtenAhNz",
        amount: servicePrice * 100,
        currency: "INR",
        name: "Mr Buddy",
        description: "Purchase Basic Service",
        order_id: result.data.id,
        handler: async function (response) {
          alert(
            "Payment Successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          email: user.email,
          contact: user.phone_number,
        },
        notes: {
          address: "Pune Cdac Acts",
        },
        theme: {
          color: "#1f5215",
        },
      };
      let paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      console.log("not happend");
      // Display error message to the user
      setShowErrorMessage(true);

      // Hide the error message after a few seconds (adjust as needed)
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };

  // Function to get the next 4 days
  const getNext4Days = () => {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return Array.from({ length: 4 }, (_, index) => {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + index + 1);

      const dayIndex = nextDay.getDay();
      const day = days[dayIndex];
      const date = nextDay.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });

      return { date, day };
    });
  };

  const next4Days = getNext4Days();

  const getTimeSlots = () => {
    const startHourMorning = 10;
    const startHourAfternoon = 12;
    const endHourAfternoon = 16;

    const morningSlots = Array.from({ length: 2 }, (_, index) => {
      const startTime = startHourMorning + index;
      const endTime = startTime + 1;

      return { startTime, endTime, category: "Morning" };
    });

    const afternoonSlots = Array.from({ length: 4 }, (_, index) => {
      const startTime = startHourAfternoon + index;
      const endTime = startTime + 1;

      return { startTime, endTime, category: "Afternoon" };
    });

    const eveningSlots = Array.from({ length: 2 }, (_, index) => {
      const startTime = endHourAfternoon + index + 1;
      const endTime = startTime + 1;

      return { startTime, endTime, category: "Evening" };
    });

    return { morningSlots, afternoonSlots, eveningSlots };
  };

  const { morningSlots, afternoonSlots, eveningSlots } = getTimeSlots();

  return (
    <>
      <div className="date-time-section">
        <h2>Select Delivery Date</h2>
        {/* Delivery date */}
        <div className="date-box-container">
          {next4Days.map((day, index) => (
            <div
              key={index}
              className={`date-box ${
                selectedDate === day.date ? "selected-date" : ""
              }`}
              onClick={() => handleDateClick(day.date)}
            >
              <span>{day.date}</span>
              <span>{day.day}</span>
            </div>
          ))}
        </div>
        <h2>Choose PickUp Time</h2>
        <div className="time-slot-container">
          <div className="time-slot-category">
            <h4>Morning Slots</h4>
            {morningSlots.map((slot, index) => (
              <div
                key={index}
                className={`time-slot ${
                  selectedTimeSlot &&
                  selectedTimeSlot.startTime === slot.startTime
                    ? "selected-time-slot"
                    : ""
                }`}
                onClick={() => handleTimeSlotClick(slot)}
              >
                <span>{`${slot.startTime}:00 - ${slot.endTime}:00`}</span>
              </div>
            ))}
          </div>

          <div className="time-slot-category">
            <h4>Afternoon Slots</h4>
            {afternoonSlots.map((slot, index) => (
              <div
                key={index}
                className={`time-slot ${
                  selectedTimeSlot &&
                  selectedTimeSlot.startTime === slot.startTime
                    ? "selected-time-slot"
                    : ""
                }`}
                onClick={() => handleTimeSlotClick(slot)}
              >
                <span>{`${slot.startTime}:00 - ${slot.endTime}:00`}</span>
              </div>
            ))}
          </div>

          <div className="time-slot-category">
            <h4>Evening Slots</h4>
            {eveningSlots.map((slot, index) => (
              <div
                key={index}
                className={`time-slot ${
                  selectedTimeSlot &&
                  selectedTimeSlot.startTime === slot.startTime
                    ? "selected-time-slot"
                    : ""
                }`}
                onClick={() => handleTimeSlotClick(slot)}
              >
                <span>{`${slot.startTime}:00 - ${slot.endTime}:00`}</span>
              </div>
            ))}
          </div>
        </div>
        <h2>Add Address</h2>
        <AddressSection />
        {showErrorMessage && (
          <div className="error-message">
            Please fill in all the required details before placing an order.
          </div>
        )}
        <div className="order-button-container">
          <button className="button" onClick={createOrder}>
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
