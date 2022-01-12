import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen =()=>{
const [signIn,setsignIn] =useState(false);

    return(
        <div className="LoginScreen">
            <div className="LoginScreen_background">
                <img gnIn
                    className="LoginScreen_logo"
                    src="https://static.wikia.nocookie.net/arresteddevelopment/images/f/fd/Netflix_logo_02.jpeg"
                    alt=""
                />
                <button onClick={()=>setsignIn(true)}
                 className="LoginScreen_button">Sign In</button>
                <div className="LoginScreen_gradient"/>
            </div>
            <div className="LoginScreen_body">
                    {
                        signIn ?(<SignUpScreen/>):(
                            <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="LoginScreen_input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button onClick={()=>setsignIn(true)}
                            className="LoginScreen_getstarted">Get Started</button>
                        </form>
                    </div>
                </>
                        )
                    }

               
            </div>

        </div>
    );
}

export default LoginScreen;