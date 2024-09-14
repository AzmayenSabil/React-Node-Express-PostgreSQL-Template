import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProfilePage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    // Fetch user info from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser({
        username: storedUser.username,
        email: storedUser.email,
        role: storedUser.role,
      });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Profile
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Username:</span>
              <span className="text-gray-800">{user.username}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Email:</span>
              <span className="text-gray-800">{user.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-600">Role:</span>
              <span className="text-gray-800 capitalize">{user.role}</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() =>
                alert("Edit Profile functionality not yet implemented")
              }
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
