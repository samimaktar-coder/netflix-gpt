import React from "react";
import NetflixLogo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-4">
      <img src={NetflixLogo} alt='netflix-logo' className="w-44" />
    </div>
  );
};

export default Header;
