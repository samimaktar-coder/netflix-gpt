import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignForm = () => {
    setSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign in and Up logic

    if (!isSignInForm) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4bd203ee6aa269db9dfeeeeb1038627e-1692184443446/6bc5d217-a25d-4b79-a23a-32bec8092251.png",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " :: " + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " :: " + errorMessage);
        });
    }
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
            ref={name}
            type='text'
            placeholder='Full Name'
            className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
          />
        )}
        <input
          ref={email}
          type='email'
          placeholder='Email Adress'
          className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
        />
        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='p-2 outline-none h-12 rounded bg-gray-700 text-white mb-6'
        />
        <p className='text-red-500 text-xs'>{errorMessage}</p>
        <button
          className='h-12 mt-6 bg-red-600 font-semibold text-white text-lg rounded'
          onClick={handleButtonClick}
        >
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
