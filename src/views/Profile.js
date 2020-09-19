// React
import React, { useState } from "react";

// React Router Dom
import { useHistory } from "react-router-dom";

// Material-ui
import { Button } from "@material-ui/core";

// Firebase
import { authService } from "../firebase";

// CSS
import "./Profile.css";

function Profile({ userObj, refreshUser }) {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const handleSignOut = () => {
    authService.signOut();
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <>
      <div className="profile">
        <h2>{userObj.displayName}'s Profile</h2>
        <form className="profileForm" onSubmit={handleSubmit}>
          <input
            className="profileForm__input"
            type="text"
            value={newDisplayName}
            onChange={(e) => setNewDisplayName(e.target.value)}
            placeholder="Display Name"
          />
          <Button className="profileForm__button" type="submit">
            Update Profile
          </Button>
        </form>

        <Button className="profile__signOutButton" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </>
  );
}

export default Profile;
