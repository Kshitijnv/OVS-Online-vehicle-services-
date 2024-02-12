import React, { useState } from "react";
import "./Checkout.css";
import AddressSection from "../Address/AddressSection";

function Checkout() {
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

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
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

  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleTimeSlotClick = (timeSlot) => {
    console.log("Selected Time Slot:", timeSlot);
    setSelectedTimeSlot(timeSlot);
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
        <div className="order-button-container">
          <button className="button">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
