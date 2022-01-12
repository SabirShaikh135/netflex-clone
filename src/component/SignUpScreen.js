import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignUpScreen.css";

const SignUpScreen=()=>{
    const emailRef= useRef(null);
    const passwordRef= useRef(null);


    const register=(e)=>{
        e.preventDefault();  
        auth.createUserWithEmailAndPassword(                  //this is use for firebase
            emailRef.current.value,
            passwordRef.current.value
         ).then((authUser)=>{
             console.log(authUser);
         }).catch((error)=>{
             alert(error.message);
         })

    }

    const signIn=(e)=>{
        e.preventDefault(); 
        auth.signInWithEmailAndPassword(                  //this is use for firebase
            emailRef.current.value,
            passwordRef.current.value
         ).then((authUser)=>{
             console.log(authUser);
         }).catch((error)=>
            alert(error.message));

    }
    return(
        <div className="SignUpScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input ref={emailRef} type="Email" placeholder="Email"/>
                <input ref={passwordRef} type="Password" placeholder="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4><span className="SignUpScreen_Gray">New To Netflex ?</span> 
                <span className="SignUpScreen_Link" onClick={register}> Sign Up Now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;