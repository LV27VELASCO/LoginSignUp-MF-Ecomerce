import React from "react";
import "../styles/loader.css";
import "../styles/login.css";
const Created = () => {
  return (
    <div className="m-auto flex flex-col items-center max-w-max">
        <div className="bg-green-400 rounded-full w-24 h-24 p-2 flex items-center justify-center">
        <i class="fa-solid fa-face-smile-wink text-5xl text-white"></i>
        </div>
        <div className="bg-green-400 px-5 py-2 rounded-md">
        <h3 className="font-semibold text-gray-50">User created successfully!!</h3>
        </div>
    </div>
  );
};

export default Created;
