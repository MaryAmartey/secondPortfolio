import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props){
    return(
    <nav className="header" style={{backgroundColor: props.color}}>
            <div className="nav-wrapper">
                <div className="nav-link-wrapper left-side">
                    <Link to="/" style={{fontSize: 25}}> <i class="fa fa-home fa-fw" aria-hidden="true"></i>Home</Link>
                </div>

                <p className="right-side signature">MARY AMARTEY <i class="fa fa-user" aria-hidden="true"></i></p>
                
            </div>
        </nav>
    )
}