"use client";

import { useState, useEffect } from "react";
import { User } from "../types/index";

const ProfileData = () => {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
      .then((res) => res.json())
      .then((data) => {
        setUserName(data.username)})
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  return(
    <div className="text-[25px] text-center font-bold mt-10 mb-5 ">
        <p>Welcome, <span className="text-yellow-500">{userName}</span></p> 
    </div>
  );
};

export default ProfileData;
