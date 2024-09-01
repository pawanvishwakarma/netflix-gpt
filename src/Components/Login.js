import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUsers } from "../utils/userSlice";
import { BG_IMAGE, USER_ICON } from "../utils/contants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
 

  const handleLoginForm = () => {
    const erroMessage = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(erroMessage);
    if (erroMessage) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
        
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_ICON,
          })
          
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUsers({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black p-12 text-white my-40 mx-auto right-0 left-0 bg-opacity-80 rounded-sm"
      >
        <h1 className="font-bold font-sans text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            text="text"
            ref={name}
            placeholder="Name"
            className="p-2 my-4 w-full bg-gray-500 rounded-sm"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-500 rounded-sm"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-500 rounded-sm"
        />
        {/* {!isSignInForm && (
          <>
            <label for="myfile">Select a file:</label>
            <input
              type="file"
              className="p-2 my-4 w-full bg-gray-500 rounded-sm"
              id="myfile"
              name="myfile"
            />
          </>
        )} */}
        <p className=" text-red-700 font-bold">{erroMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-sm"
          onClick={handleLoginForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleForm} className="cursor-pointer font-semibold">
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already have account? Sign In"}
        </p>
      </form>
      <div className="">
        <img
          src= { BG_IMAGE}
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
