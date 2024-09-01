import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUsers, removeUsers } from '../utils/userSlice';
import { LOGO } from '../utils/contants';



const Header = () => {

  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUsers());
        navigate("/")
      }
    });
    // When umount the component
    // unsubscribed the onAuthStateChanged Callback
    return () => unsubscribe();

  }, []);
  
  const handlSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    
    <>
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-48 ' src= { LOGO }
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
