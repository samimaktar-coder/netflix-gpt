import React from "react";
import UserIcon from "../assets/user.jpg";
import NetflixLogo from "../assets/netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className='absolute w-full px-8 py-4 flex items-center justify-between'>
      <img src={NetflixLogo} alt='netflix-logo' className='w-44' />
      {userData && (
        <div className='flex items-center gap-x-2'>
          <img src={userData.photoURL} alt='user-icon' className='w-9' />
          <button
            className='text-sm font-semibold bg-gray-800 text-white py-2 px-3 rounded-md'
            onClickCapture={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
