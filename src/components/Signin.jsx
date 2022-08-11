
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from "../firebase"


import { GoogleAuthProvider,signInWithRedirect} from 'firebase/auth'



const style= {
    Wrapper: `flex justify-center`
}
 const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}



const Signin = () => {
  return (
    <div className={style.Wrapper}>

        <GoogleButton onClick={googleSignIn}/>
        </div>
  )
}

export default Signin