import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
