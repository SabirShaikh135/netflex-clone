import React from "react";
import "./PlanScreen.css";

const PlanScreen =() =>{
    return(
        <div className="PlanScreen">
            <div className="PlanScreen_plans">
                 <div className="PlanScreen_info">
                    <h5>Premium</h5>
                    <h6>4k+HDR</h6>
                 </div>
                 <button onClick={()=>alert("Payment Process Coming Soon")}>Subscribe</button>
            </div>

            <div className="PlanScreen_plans">
                 <div className="PlanScreen_info">
                    <h5>Standerd</h5>
                    <h6>1080p</h6>
                 </div>
                 <button onClick={()=>alert("Payment Process Coming Soon")}>Subscribe</button>
            </div>

            <div className="PlanScreen_plans">
                 <div className="PlanScreen_info">
                    <h5>Basic</h5>
                    <h6>720p</h6>
                 </div>
                 <button onClick={()=>alert("Payment Process Coming Soon")}>Subscribe</button>
            </div>
        </div>
    );
}

export default PlanScreen;