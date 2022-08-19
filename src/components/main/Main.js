import React from "react";
import headshot from '../../images/IMG_0209.jpg';
import firstImage from '../../images/markus-spiske-FXFz-sW0uwo-unsplash.jpg';
import secondImage from '../../images/alexandr-popadin-zQHOthMsrfQ-unsplash.jpg';
import thirdImage from '../../images/jess-bailey-q10VITrVYUM-unsplash.jpg';
import { Link } from "react-router-dom";
import CV from '../../assets/Amartey_Mary_2023.pdf';
import FloatingNav from "../floatingNav/FloatingNav";

export default function Main(){
    return(
        <div>
            <div className= "description"> 
                    <div className="info">
                        <h1 className="name">Mary Amartey</h1>
                        <p> Computer Major <span style={{paddingLeft:"1em"}}>Full Stack Developer</span></p>
                    <div className= "socials">
                        <a href="https://www.facebook.com/mary.amartey.528" className="fa fa-facebook"></a>
                        <a href="https://www.linkedin.com/in/mary-amartey-0388a9185" className="fa fa-linkedin"></a>
                        <a href="https://instagram.com/maryamarteyk?r=nametag" className="fa fa-instagram"></a>
                    </div>
                    </div>
                </div>
                <hr></hr>


            <section className="aboutMe">
            
                
               <div className="about_me">
                    <div className="container" >
                        <div className="imgBox"><img className="imgHeadshot" src={headshot} alt="potrait of me"/></div> 
                        <div  className="aboutText">
                            <h1>Who I am Now </h1>
                            <p>My name is Mary Amartey, an international student from Ghana, pursuing a major in computer science. I joined Oberlin College with the intention of immersing into different academic fields. After exploring my available options, I loved to observe a computer solve a seemingly complex problem with just a few lines of code. Now, I apply these well-rounded skills to address real-world problems.</p>
                            <div className="btnSpace">
                                <a href={CV} download className="btn">Download CV</a>
                                <Link to="/contactMe" className="btn btn-primary">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            <hr style={{marginTop:"3em"}}></hr>

            <section className= "box">
                <div className = "container3">
                    <div className="item">
                        <div className="item-image"></div>
                            <div className="img-text1_2" style={{ backgroundImage: `url('${firstImage}')` }}>
                                    <Link to="/contactMe">Contact Me</Link> <br></br>
                                    <i className="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div> 
                    <div className="item">
                        <div className="item-image"></div>
                            <div className="img-text1_2" style={{ backgroundImage: `url('${secondImage}')` }}>
                                    <Link to="/extraCurricular">Extracurriculars</Link> <br></br>
                                    <i className="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div>
                    <div className="item">
                        <div className="item-image"></div>
                            <div className="img-text3" style={{ backgroundImage: `url('${thirdImage}')` }}>
                                    <Link to="/resumePage"> My Resume </Link> <br></br>
                                    <i className="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div>
                </div>
        <hr></hr>
          
            </section>
            <FloatingNav/>
            
        </div>
    )
}