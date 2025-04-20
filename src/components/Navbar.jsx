import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="absolute top-0 bg-black/50 p-4 shadow-md pl-5 pb-7\5 pt-10 text-2xl w-[100%] shadow-black/70 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-6xl font-bold text-white">Zariya</h1>
        <ul className="flex">
          <li>
            <Link to="/" className="text-white hover:underline pr-10">
              Home
            </Link>
          </li>
          <li>
            <Link to="/donate" className="text-white hover:underline pr-10">
              Donate
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline pr-10">
              About
            </Link>
            
          </li>
        <ul className="flex ">
          <li>
            <Link to="/Login" className="bg-gray-700 text-white py-2 px-10 rounded-lg hover:bg-gray-500 transition duration-200 mr-2">
             Login
            </Link>
            
          </li>
    
          <li>
            <Link to="/Register" className="bg-gray-700 text-white py-2 px-10 rounded-lg hover:bg-gray-500 transition duration-200">
             Register
            </Link>
         
          </li>
        </ul> 
       
        </ul>
      </div>
    </nav>
  );
}
