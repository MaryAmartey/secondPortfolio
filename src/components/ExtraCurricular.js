import React from "react";
import Navbar from "./Navbar";
import extracurricularsImg from '../images/extracurImg.jpg';

export default function ExtraCurricular(){
    return(
        <div>
            <Navbar color="grey" />
            
            <img className="imgEdit" src={extracurricularsImg}/>
            <div style={{margin: '5em'}}>
            <p>Member of Choreo dance dance. Participated in on-campus perfomances</p>
            <p>Member of Oberlin Cooperative Student Association (OSCA): Acted as the cleaning coordinator for Third World Social Justice Coop from 09/01/2021 to 05/01/2022. Duties included acting as a laision between OSCA and the members in the house and assigning and supervising house duties.</p>
            <p>Member of African Student Association: Participated and helped organized on-campus events.</p>
            </div>
            
        </div>
    )
}