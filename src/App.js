import React from "react";
import Home from "./components/home/Home";
import ResumePage from "./components/resumePage/ResumePage";
import ContactMe from "./components/contactMe/ContactMe";
//import backgroundImg from './images/brownImg.png';


import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import ExtraCurricular from "./components/extraCurricular/ExtraCurricular";

export default function App(){
    return(
        <div > 
            <Routes>
                <Route path = '/' element={< Home/>}/>
                <Route path ='/resumePage' element ={<ResumePage/>} />
                <Route path = '/extraCurricular' element={< ExtraCurricular/>}/>
                <Route path = '/contactMe' element={< ContactMe/>}/>
            </ Routes>
        </div>
    
    )
}