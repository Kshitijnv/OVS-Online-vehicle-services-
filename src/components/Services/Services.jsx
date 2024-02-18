import { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

function Services() {
  const [services, setServices] = useState([]);
  const { isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      async function fetchData() {
        try {
          const response = await axios.get("http://localhost:7070/car-service");
          setServices((prevServices) => [...prevServices, ...response.data]);
        } catch (error) {
          console.error("Error fetching services:", error);
        }
      }

      fetchData();
    }
    if (!isAuthenticated) {
      toast.warn("Please Login first!!!");
    }
  }, [isAuthenticated]);
  return (
    <>
      {services.length > 0 ? (
        services.map((service, index) => (
          <ServicesCard
            key={index}
            serviceId={service.id}
            price={service.price}
            name={service.name}
            specifications={service.specifications}
            duration={service.duration}
          />
        ))
      ) : (
        <p>Please Login First</p>
      )}
    </>
  );
}

export default Services;
