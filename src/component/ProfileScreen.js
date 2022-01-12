import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";
import "./ProfileScreen.css";
import PlanScreen from "./PlanScreen";

const ProfileScreen=()=>{
    const user = useSelector(selectUser);
    return(
        <div className="ProfileScreen">
            <Nav/>
            <div className="ProfileScreen_body">
                <h1>Edit Profile</h1>
                  <div className="ProfileScreen_info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
                     <div className="ProfileScreen_details">
                        <h2>{`Your Email Id:   ${user.email}`}</h2>
                        <div className="ProfileScreen_plans">
                        <h3>Plans</h3>
                            <PlanScreen/>
                            <button
                             onClick={()=>auth.signOut()}
                             className="ProfileScreen_signout">Sign Out
                             </button>
                        </div>
                </div>
            </div>
         </div>
     </div>
    );
}

export default ProfileScreen;