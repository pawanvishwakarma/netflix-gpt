import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const handleForm = () => {
        setIsSignInForm(!isSignInForm)  
    }
  return (
    <div>
    <Header />
    <form className='w-3/12 absolute bg-black p-12 text-white my-40 mx-auto right-0 left-0 bg-opacity-80 rounded-sm' >
        <h1 className='font-bold font-sans text-xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input text="text" placeholder='Name' className='p-2 my-4 w-full bg-gray-500 rounded-sm' />}
        <input text="email" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-500 rounded-sm' />
        <input text="password" placeholder='Password' className='p-2 my-4 w-full  bg-gray-500 rounded-sm' />
        <button className='p-2 my-6 bg-red-700 w-full rounded-sm' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleForm} className='cursor-pointer font-semibold' >{isSignInForm ? "New to Netflix? Sign Up now" : "Already have account? Sign In"}</p>
    </form>
    <div className=''>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg'
       alt='' />
    </div>
   
    </div>
  )
}

export default Login;
