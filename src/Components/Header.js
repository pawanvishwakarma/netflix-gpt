import React from 'react'
import { useSelector } from 'react-redux'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';



const Header = () => {

  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  
  const handlSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    
    <>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='logo' />
  { user &&   <div className='p-4 m-2 flex '>
        <img className='w-12 h-12' alt='userIcon' 
        src = {user?.photoURL}  />
        <div className='mx-2'>
        <h1>{user?.displayName}</h1>
        <button onClick={handlSignOut}>SignOut</button>  
        </div>
      </div>}
    </div>
    
    </>
  )
}

export default Header
