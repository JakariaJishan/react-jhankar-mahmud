import React, { useState } from "react";
import './User.css';

const User = (props) => {
  let {name, phone,email, picture, dob} =props.user;
  let handleTeam = props.handleTeam;
  let fullName = name.first + " " + name.last;
  let [contact, setContact] = useState("");
  let handlePhone = () => {
    setContact(phone);
  }
  return (
    <div className="userInfo">
      <div className="userImage">
        <img src={picture.large} alt="" />
      </div>
      <div className="userDetails">
        <p style={{fontWeight: "bold"}}>name: {fullName}</p>
        <p>email: {email}</p>
        <p>age: {dob.age}</p>
        <p>phone: {contact}</p>
        <button onClick={handlePhone}>show contact</button>
        <button onClick={() => handleTeam(fullName)}>team up</button>
      </div>
      
    </div>
  );
};

export default User;
