"use client";

import { useState, useEffect } from "react";
import { User } from "../../types/index";
import { CircleUser } from 'lucide-react';

const ProfilePage = () => {
  const [userData, setUserData] = useState<User>({
    name: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/3')
      .then((res) => res.json())
      .then((data) => {
        setUserData({
            name: data.name,
            email: data.email,
            username: data.username
          });
    })
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  return(
    <div className="w-full border mt-5 rounded-xl">
        <h1 className="text-center text-[25px] font-bold p-4">Profile Section</h1>
        <div className="w-full flex flex-col justify-center items-center">
            <CircleUser size={100} className="my-5 opacity-70"/>
            <div className="text-center">
                <div className="flex flex-row gap-2">
                    <p className="text-slate-500/80">Username:</p>
                    <p className="">{userData.username}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p className="text-slate-500/80">Name:</p>
                    <p className="">{userData.name}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p className="text-slate-500/80">Email:</p>
                    <p className="">{userData.email}</p>
                </div>
                
            </div>
        </div>
        {/* <h1 className="text-3xl font-bold mb-6">{userData.name}</h1>
      <h1 className="text-3xl font-bold mb-6">{userData.email}</h1> 
      <h1 className="text-3xl font-bold mb-6">{userData.username}</h1>  */}


    </div>
  );
};

export default ProfilePage;
