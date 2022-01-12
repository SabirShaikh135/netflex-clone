import React, { useEffect } from "react";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginScreen from "./component/LoginScreen";
import { auth } from "./firebase";
import {useDispatch, useSelector}  from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./component/ProfileScreen";


const App =()=>{
    const user= useSelector(selectUser); 
    const dispatch = useDispatch();
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged(userAuth=>{
            if(userAuth){
                //logged in
                console.log(userAuth);
                dispatch(login({
                     uid: userAuth.uid,
                     email: userAuth.email,
                }))
            }
            else{
                //logged out
                dispatch(logout());
            }
        })
        return unsubscribe;
    },[dispatch]);
    return(
        <div className="App">
       
       <Router>
       {
           !user ? (<LoginScreen/>)
           :(

            <Routes>
                <Route exact path="/" element={<HomeScreen/>}>
                </Route>

                <Route exact path="/profile" element={<ProfileScreen/>}>
                </Route>
            </Routes>
            
           )
           
       }
            
        </Router>
       
        </div>
    );
}

export default App;