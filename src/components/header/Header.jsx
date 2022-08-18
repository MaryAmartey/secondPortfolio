import React from "react";
import Navbar from "../navbar/Navbar";
import headerBackground from '../../images/patrick-tomasso-1NTFSnV-KLs-unsplash (1).jpg';


export default function Header(){
    return(
        <section className="top" style={{ backgroundImage: `url('${headerBackground}')` }}>
            <Navbar color="transparent" />
   
            <div className ="container2"> 
                <div className ="myheader">
                    <h1>My port<span>folio</span></h1>
                    <h2>Creativity is Inspired.</h2>
                </div>
            </div>

        </section>
    )}