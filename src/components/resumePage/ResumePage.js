import React from "react";
import Navbar from "../navbar/Navbar";
import FloatingNav from "../floatingNav/FloatingNav";
import { Link } from "react-router-dom";
import CV from '../../assets/Amartey_Mary_2023.pdf';
import '../contactMe/contactme.css'

export default function ResumePage(){
    return(
        <div>
            <Navbar color="var(--color-primary-light)" />
            
            <div className="btnSpace" style={{display:"flex", justifyContent:"center", marginTop:""}} >
                <a href={CV} download className="btn">Download CV</a>
                <Link to="/contactMe" className="btn btn-primary">Contact</Link>
            </div>

            <div className = "textFormat glass">
            <div className="list_section ">
                <strong className="title">EDUCATION</strong> <br></br>
                    <div className="spaceOut">
                        <span>Oberlin College, GPA: 3.65 </span>
                        <span> <strong>Oberlin, OH</strong></span>
                    </div>
                    
                    <div className="spaceOut list">
                        <span>Major: Bachelor of Arts, Computer Science</span>
                        <span>Expected Graduation: May, 2023</span>
                    </div>
                    
                   <strong>Relevant Coursework: </strong> <br></br>
                    <span>Introduction to Computer Science, Data Structures, Systems Programming, Algorithms, Discrete Mathematics, Intro to Statistics, Theory of Computation, Introduction to Computer Architecture and Programming Abstractions.</span>
                    </div>
                    <br></br>
           
           <div className="list_section">
                <strong className="title">EXPERIENCE </strong>
                <ul className="list">
                    
                        <span> <strong>Codyssia ,
                        Full Stack Developer Intern
                            <br />
                        Remote Work,
                        [06/2022- present] </strong></span>
                    
                
                
                    <li>Developed web applications to enhance the flow of information for non-profit organizations using HTML and CSS for UI with Laravel framework for php and Livewire for backend architecture.</li>
                    <li>Worked with a database management system, tableplus and mySQL to store, manage and access company data.    </li> 
                </ul> 
           
          


            <ul className="list">
                <div className="spaceOut">
                    <span><strong>Oberlin College Computer Science Department:
                    Oberlin, OH 
                        <br />
                     Student Research Assistant ,
                    07/2020 – 08/2020 </strong></span>
                </div>
                     
                        <li> Performed statistical analysis on series of research papers focused on retaining Computer Science students.</li>
                        <li> Produced reports on effective practices to retain students in Introductory Computer Science classNamees. </li> 
                </ul>
             
            <ul className="list">
                <div className="spaceOut">
                    <span><strong>Western Reserve Land Conservancy: Oberlin, OH
                    <br />
                    Student Research Assistant ,
                    09/2019 – 12/2019 </strong></span>
                </div>
                <li>Conducted meticulous research to identify medicinal and foraging information on specific plant samples.</li> 
                <li>Complied research data to create representative graphs and charts highlighting results for presentations.</li> 
            </ul>

            </div>
                
            <br></br>

            <div className="list_section">
                <strong className="title">LEADERSHIP & PROFESSIONAL DEVELOPMENT</strong>
                <ul className="list">
                    
                     <span> <strong> Marginalized Groups In Computer Science: Treasurer ,</strong>
                       </span>
                       
                    <span> 02/2022- 06/2023</span>

                    <li>Managed the organization’s semesterly budget and ensured accurate expenditure records.</li> 
                    <li>Acted as a liaison between my organization and the Student Finance Committee for approval for expenditures.</li> 
                    </ul>

                
                <ul className="list">
                
                        <span> <strong>Goldman Sachs Virtual Experience Program Participant </strong>
                             ,</span>
                        <span> 10/2020 – 10/2020</span>
                   
 
                    <li>Participated in Goldman Sachs Experience Program and completed a task on cracked leaked password database.</li>
                </ul>

            </div>

            <br></br>
            
            <div className="list_section">
                <strong className="title"> PROJECTS </strong>
                    <ul className="list">
                        <li> Designed a personal portfolio website highlighting relevant work using REACT, HTML and CSS </li> 
                        <li> Collaborated in a team to implement a digitized Cartesian chase game by utilizing compound data types in C++. </li> 
                        <li> Worked in a team to design an application using Flutter and Android Studio to display on-campus dining menus. </li> 
                    </ul>
            </div>
            
            <br></br>

            <div className="list_section">
            <strong className="title"> SKILLS & INTERESTS </strong>
                <ul className="list">
                    <li> Computer: TablePlus, Microsoft Office (Excel, Word, PowerPoint & Outlook), Google Docs. </li>
                    <li> Languages: Proficient in Java, Python, RStudio, CSS, HTML, C++, Git, SQL, laravel, PhP, React, Livewire, Javascript </li>
                    <li> Campus and Community Involvements: Oberlin Student Co-operative Association, African Student Association. </li> 
                </ul>
            </div>
            <div style={{marginTop:"5%", paddingBottom:"2%"}}>
                <hr></hr>
            </div>
            
            </div>
            <FloatingNav/>
        </div>
    )
}