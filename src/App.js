import React from "react";
import Home from "./components/Home";
import ResumePage from "./components/resumePage";
import ContactMe from "./components/ContactMe";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";
import ExtraCurricular from "./components/ExtraCurricular";

export default function App(){
    return(
        <div> 
            <Routes>
                <Route path = '/' element={< Home/>}/>
                <Route path ='/resumePage' element ={<ResumePage/>} />
                <Route path = '/extraCurricular' element={< ExtraCurricular/>}/>
                <Route path = '/contactMe' element={< ContactMe/>}/>
            </ Routes>
        </div>
    
    )
}