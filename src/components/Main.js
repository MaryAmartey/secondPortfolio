import React from "react";
import headshot from '../images/IMG_0209 (2).jpg';
import firstImage from '../images/markus-spiske-FXFz-sW0uwo-unsplash.jpg';
import secondImage from '../images/alexandr-popadin-zQHOthMsrfQ-unsplash.jpg';
import thirdImage from '../images/jess-bailey-q10VITrVYUM-unsplash.jpg';
import { Link } from "react-router-dom";

export default function Main(){
    return(
        <div>
            <section className="aboutMe">
                <h2 className="about">About me</h2>
                
                <div className="about_me">
                    <div className="container" >
                        <div>
                            <h1>Who I am Now </h1>
                            <p>My name is Mary Amartey, an international student from Ghana, West Africa pursuing a major in computer science. I joined Oberlin College with the intention of exploring different learning fields. I took several classes including Psychology, Math, Philosophy, and Environmental studies. Although each class I took added to my way of thinking, I realized that I enjoyed problem-solving. I loved witnessing how a computer could solve a seemingly complex problem with just a few lines of code. I look forward to acquiring the necessary skills in specific fields of this study. With the skill set developed in Computer science, I can immerse myself in various fields, particularly providing contributions in addressing real-world problems.</p>
                        </div>
                        <div><img class="pic" src={headshot} alt="potrait of me"/></div> 
                    </div>
                </div>
            </section>
        
            <section class= "box">
                <div class = "container3">
                    <div class="item">
                        <div class="item-image"></div>
                            <div class="img-text1_2" style={{ backgroundImage: `url('${firstImage}')` }}>
                                    <Link to="/contactMe">Contact Me</Link> <br></br>
                                    <i class="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div> 
                    <div class="item">
                        <div class="item-image"></div>
                            <div class="img-text1_2" style={{ backgroundImage: `url('${secondImage}')` }}>
                                    <Link to="/extraCurricular">Extra curriculars</Link> <br></br>
                                    <i class="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div>
                    <div class="item">
                        <div class="item-image"></div>
                            <div class="img-text3" style={{ backgroundImage: `url('${thirdImage}')` }}>
                                    <Link to="/resumePage"> My Resume </Link> <br></br>
                                    <i class="arrowDecor fas fa-arrow-right"></i>
                            </div>
                    </div>
                </div>
        <hr></hr>
                <div class= "myend"> 
                    <div class="signature">
                    <p>MARY AMARTEY</p>
                    <p>Computer Major</p>
                    <p>Web developer</p>
                    </div> 
                    <div class= "socials">
                        <a href="https://www.facebook.com/mary.amartey.528" class="fa fa-facebook"></a>
                        <a href="https://www.linkedin.com/in/mary-amartey-0388a9185" class="fa fa-linkedin"></a>
                        <a href="https://instagram.com/maryamarteyk?r=nametag" class="fa fa-instagram"></a>
                    </div>
                </div>
            
                
            </section>
        </div>
    )
}