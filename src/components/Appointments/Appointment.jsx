import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import "./Appointment.css";

function Appointment() {
  const [orders, setOrders] = useState([]);
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    async function fetchData() {
      let response = await axios.get(`http://localhost:7070/appointments`);
      console.log(response.data);
      setOrders(response.data);
    }
    fetchData();
  }, []);
  const handleYes = async (orderId) => {
    console.log("User clicked Yes");
    toast.dismiss();
    await axios.get(`http://localhost:7070/appointments/${orderId}/complete`);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "COMPLETED" } : order
      )
    );
  };

  const handleNo = () => {
    // Handle "No" action here
    console.log("User clicked No");
    toast.dismiss();
  };
  const completeHandler = async (orderId) => {
    console.log(orderId);
    toast.warning(
      <div>
        <small> Do you want to proceed?</small>
        <br />
        <button className="alert-box" onClick={() => handleYes(orderId)}>
          Yes
        </button>
        <button className="alert-box" onClick={handleNo}>
          No
        </button>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        closeButton: false,
      }
    );
  };
  return (
    <>
      {isAuthenticated && user.email === "admin@gmail.com" ? (
        <div className="container appointment-container">
          <div className="row heading-row">
            <div className="col-md-2">
              <span>Appointment Id</span>
            </div>
            <div className="col-md-2">
              <span>Owner Name</span>
            </div>
            <div className="col-md-2">
              <span>Owner Car</span>
            </div>
            <div className="col-md-2">
              <span>Status</span>
            </div>
            <div className="col-md-2">
              <span>Service Name</span>
            </div>
            <div className="col-md-2">
              <span>Actions</span>
            </div>
          </div>

          {orders.map((order, key) => (
            <div className="row content-row" key={key}>
              <div className="col-md-2">{order.id}</div>
              <div className="col-md-2">{order.ownerName}</div>
              <div className="col-md-2">{order.ownerVehicleName}</div>
              <div className="col-md-2">{order.status}</div>
              <div className="col-md-2">{order.serviceName}</div>
              <div className="col-md-2">
                {order.status === "BOOKED" ? (
                  <button
                    className="button"
                    onClick={() => completeHandler(order.id)}
                  >
                    Mark As Complete
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div>Un Authorized Access!!!!!</div>
        </>
      )}
    </>
  );
}

export default Appointment;
