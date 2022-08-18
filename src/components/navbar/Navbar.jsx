import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props){
    return(
    <nav className="header" style={{backgroundColor: props.color}}>
            <div className="nav-wrapper">
                <div className="nav-link-wrapper left-side">
                    <Link to="/" style={{fontSize: 25}}> <i className="fa fa-home fa-fw" aria-hidden="true"></i></Link>
                </div>

                <p className="right-side signature">MARY AMARTEY <i className="fa fa-user" aria-hidden="true"></i></p>
                
            </div>
        </nav>
    )
}