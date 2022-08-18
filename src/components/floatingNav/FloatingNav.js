import React from "react";
import { NavLink } from "react-router-dom";
import '../floatingNav/floatingnav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {RiContactsBookLine} from 'react-icons/ri';
import {MdConnectWithoutContact} from 'react-icons/md';
import {RiFilePaper2Line} from 'react-icons/ri';
import { useState , useEffect} from "react";


const FloatingNav = () =>{ 
 
   
    return(
   
    <nav className="navPrimary">
         <NavLink to="/" activeClassName ="active"><AiOutlineHome/></NavLink>
         
         <NavLink to="/contactMe" activeClassName ="active"><RiContactsBookLine/></NavLink>

         <NavLink to="/extraCurricular" activeClassName ="active"><MdConnectWithoutContact/></NavLink>
         
         <NavLink to="/resumePage" activeClassName ="active"><RiFilePaper2Line/></NavLink>
    </nav>
    
    )
}


export default FloatingNav