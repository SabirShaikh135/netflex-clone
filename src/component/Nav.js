import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Nav.css";
const Nav=()=>{
const [show,handelShow]=useState(false);
const navigate =useNavigate();  //use for swithch the component
const transitionNavBar=()=>{
if(window.scrollY>100){
    handelShow(true);
}
    else{
        handelShow(false);
    }

}; 

useEffect(()=>{

    window.addEventListener("scroll",transitionNavBar);
  
    return ()=>window.removeEventListener("scroll",transitionNavBar);
},[]);


return(
<div className={`Nav ${ show && "nav_black"}`}>
<div className="nav_contents">

<img
    onClick={()=>navigate("/")}
    className="nav_logo"
    src="https://static.wikia.nocookie.net/arresteddevelopment/images/f/fd/Netflix_logo_02.jpeg"
    alt="logo"
/>
<h4 onClick={()=>navigate("/")}>Home</h4>
<img
    onClick={()=>navigate("/profile")}
    className="nav_avtar"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    alt="profile"
/>
</div>

</div>
    );
}

export default Nav;