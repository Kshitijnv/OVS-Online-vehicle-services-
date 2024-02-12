import React, { useState, useEffect } from "react";
import "./AddressSection.css";
const AddressSection = () => {
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch the list of states
  useEffect(() => {
    // Simulating an API request to fetch states
    fetch("https://api.example.com/states")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.error("Error fetching states:", error));
  }, []);

  // Fetch the list of cities when the selected state changes
  useEffect(() => {
    if (selectedState) {
      setLoadingCities(true);
      // Simulating an API request to fetch cities based on the selected state
      fetch(`https://api.example.com/cities?state=${selectedState}`)
        .then((response) => response.json())
        .then((data) => {
          setCities(data);
          setLoadingCities(false);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
          setLoadingCities(false);
        });
    }
  }, [selectedState]);

  return (
    <table className="address-section">
      <tbody>
        <tr>
          <td>
            <label htmlFor="state">Select State:</label>
          </td>
          <td>
            <select
              id="state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">-- Select State --</option>
              {states.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="city">Select City:</label>
          </td>
          <td>
            <select
              id="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              disabled={!selectedState}
            >
              <option value="">-- Select City --</option>
              {loadingCities ? (
                <option disabled className="loading-cities">
                  Loading cities...
                </option>
              ) : (
                cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))
              )}
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="street">Street:</label>
          </td>
          <td>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Enter street"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="area">Area:</label>
          </td>
          <td>
            <input
              type="text"
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AddressSection;
