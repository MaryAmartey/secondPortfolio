import React from "react";
import Navbar from "./Navbar";

export default function ResumePage(){
    return(
        <div>
            <Navbar color="black" />
            
            {/*<a href="path_to_file" download="proposed_file_name">Download</a>*/}


            <div className = "textFormat">
            <div className="list_section">
                <strong>EDUCATION</strong> <br></br>
                    <div className="spaceOut">
                        <span>Oberlin College, GPA: 3.65 </span>
                        <span> <strong>Oberlin, OH</strong></span>
                    </div>
                    
                    <div className="spaceOut list">
                        <span>Major: Bachelor of Arts, Computer Science</span>
                        <span>Expected Graduation: May, 2023</span>
                    </div>
                    
                    Relevant Coursework: <br></br>
                    <span>Introduction to Computer Science, Data Structures, Systems Programming, Algorithms, Discrete Mathematics, Intro to Statistics, Theory of Computation, Introduction to Computer Architecture and Programming Abstractions.</span>
                    </div>
                    <br></br>
           
           <div className="list_section">
                <strong>EXPERIENCE </strong>
                <ul className="list">
                    <div className="spaceOut">
                        <span> Codyssia</span>
                        <span> Remote Work</span>
                    </div>
                    <div className="spaceOut">
                        <span>Remote Work</span>
                        <span>06/2022- present </span>
                    </div>
                
                
                    <li>Developed web applications to enhance the flow of information for non-profit organizations using HTML and CSS for UI with Laravel framework for php and Livewire for backend architecture.</li>
                    <li>Worked with a database management system, tableplus and mySQL to store, manage and access company data.    </li> 
                </ul> 
           
          


            <ul className="list">
                <div className="spaceOut">
                    <span>Oberlin College Computer Science Department</span>
                    <span>Oberlin, OH </span>
                </div>
                     
                <div className="spaceOut">
                    <span>Student Research Assistant</span>
                    <span>07/2020 – 08/2020</span>
                </div>
                     
                        <li> Performed statistical analysis on series of research papers focused on retaining Computer Science students.</li>
                        <li> Produced reports on effective practices to retain students in Introductory Computer Science classes. </li> 
                </ul>
             
            <ul className="list">
                <div className="spaceOut">
                    <span>Western Reserve Land Conservancy </span> 
                    <span>Oberlin, OH</span>
                </div>
                    
                <div className="spaceOut">
                    <span>Student Research Assistant</span>
                    <span>09/2019 – 12/2019</span>
                </div>
                <li>Conducted meticulous research to identify medicinal and foraging information on specific plant samples.</li> 
                <li>Complied research data to create representative graphs and charts highlighting results for presentations.</li> 
            </ul>

            </div>
                
            <br></br>

            <div className="list_section">
                <strong>LEADERSHIP & PROFESSIONAL DEVELOPMENT</strong>
                <ul className="list">
                    <div className="spaceOut" >
                        <span>Marginalized Groups In Computer Science: Treasurer</span>
                        <span> 02/2022- 06/2023</span>
                    </div>

                    <li>Managed the organization’s semesterly budget and ensured accurate expenditure records.</li> 
                    <li>Acted as a liaison between my organization and the Student Finance Committee for approval for expenditures.</li> 
                    </ul>

                
                <ul className="list">
                <div className="spaceOut" >
                        <span>Goldman Sachs Virtual Experience Program Participant</span>
                        <span> 10/2020 – 10/2020</span>
                    </div>
 
                    <li>Participated in Goldman Sachs Experience Program and completed a task on cracked leaked password database.</li>
                </ul>

            </div>

            <br></br>
            
            <div className="list_section">
                <strong> PROJECTS </strong>
                    <ul className="list">
                        <li> Designed a personal portfolio website highlighting relevant work using REACT, HTML and CSS </li> 
                        <li> Collaborated in a team to implement a digitized Cartesian chase game by utilizing compound data types in C++. </li> 
                        <li> Worked in a team to design an application using Flutter and Android Studio to display on-campus dining menus. </li> 
                    </ul>
            </div>
            
            <br></br>

            <div className="list_section">
            <strong> SKILLS & INTERESTS </strong>
                <ul className="list">
                    <li> Computer: TablePlus, Microsoft Office (Excel, Word, PowerPoint & Outlook), Google Docs. </li>
                    <li> Languages: Proficient in Java, Python, RStudio, CSS, HTML, C++, Git, SQL, laravel, PhP, React, Livewire, Javascript </li>
                    <li> Campus and Community Involvements: Oberlin Student Co-operative Association, African Student Association. </li> 
                </ul>
            </div>
            

            </div>
        </div>
    )
}