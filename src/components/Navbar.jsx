import React from 'react'
import {auth} from '../firebase'    
import { useAuthState } from 'react-firebase-hooks/auth'
import Signin from './Signin'
import LogOut from './LogOut'
const style ={
    Navbar: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    Heading:`text-white text-3xl`
}


const Navbar = () => {
    const [user] =useAuthState(auth) 
    console.log(user)   
  return (
    <div className={style.Navbar}>
        <h1 className={style.Heading}> BizzieApp </h1>
        {user ? <LogOut/> : <Signin/>}
        

    </div>
  )
}

export default Navbar