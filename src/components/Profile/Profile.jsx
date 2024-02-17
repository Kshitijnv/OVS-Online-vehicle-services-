import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css"; // Import your custom CSS file

const Profile = () => {
  const { user } = useAuth0();
  const [editMode, setEditMode] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ name: user.name, email: user.email, mobile: user.mobile || '' });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = () => {
    // You can implement save functionality here, for now, just log the edited profile
    console.log("Edited Profile:", editedProfile);
    setEditMode(false); // Exit edit mode
  };

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2>Personal Details</h2>
        {editMode ? (
          <div className="edit_details">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={editedProfile.name} onChange={handleInputChange} />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={editedProfile.email} onChange={handleInputChange} />
            <label htmlFor="mobile">Mobile Number:</label>
            <input type="text" id="mobile" name="mobile" value={editedProfile.mobile} onChange={handleInputChange} />
          </div>
        ) : (
          <table>
            <tbody>
              <tr>
                <td><b>Name:</b></td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td><b>Email:</b></td>
                <td>{user.email}</td>
              </tr>
              {/* Add mobile number if available in user data */}
              {user.mobile && (
                <tr>
                  <td><b>Mobile Number:</b></td>
                  <td>{user.mobile}</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
        {editMode ? (
          <button className="btn-save" onClick={handleSave}>Save</button>
        ) : (
          <button className="btn-edit" onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
