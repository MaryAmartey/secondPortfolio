import React from "react";
import Navbar from "./Navbar";
import extracurricularsImg from '../images/extracurImg.jpg';

export default function ExtraCurricular(){
    return(
        <div>
            <Navbar color="grey" />
            
            <img className="imgEdit" src={extracurricularsImg}/>
            <p>This is resume</p>
        </div>
    )
}