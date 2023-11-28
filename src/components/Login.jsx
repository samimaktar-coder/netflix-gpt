import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className='relative min-h-screen bg-center bg-cover bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg")]'>
      <Header />
      <form className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 flex flex-col w-1/3 p-16 rounded-md'>
        <h2 className='text-3xl font-bold text-white mb-6'>
          Sign {isSignInForm ? "In" : "Up"}
        </h2>
        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
          />
        )}
        <input
          type='email'
          placeholder='Email Adress'
          className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
        />
        <input
          type='password'
          placeholder='Password'
          className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
        />
        <button className='h-12 mt-6 bg-red-600 font-semibold text-white text-lg rounded'>
          Sign {isSignInForm ? "In" : "Up"}
        </button>
        <p className='text-white mt-6'>
          {isSignInForm ? "New to Netflix? " : "Already have an account? "}
          <a href='#' onClick={toggleSignForm}>
            Sign {isSignInForm ? "Up" : "In"} Now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
