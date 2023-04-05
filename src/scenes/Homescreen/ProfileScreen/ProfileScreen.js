import React from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";
import Nav from "../../../Nav/Nav";

import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1> Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""></img>
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button className="profileScreen__signOut" onClick={() => getAuth(firebaseApp).signOut()}>
                {" "}
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
