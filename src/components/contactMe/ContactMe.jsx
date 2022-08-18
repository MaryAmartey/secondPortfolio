import React from "react"
import Navbar from "../navbar/Navbar"
import emailjs from "emailjs-com"
/*import contactImg from '../../images/andre-guerra-8DADDMMcJnA-unsplash.jpg';*/
import FloatingNav from "../floatingNav/FloatingNav"
import headerBackground from '../../images/patrick-tomasso-1NTFSnV-KLs-unsplash (1).jpg'
import {MdEmail} from "react-icons/md"
import {ImLinkedin} from 'react-icons/im'
import {BsMessenger} from 'react-icons/bs'


export default function ContactMe(){
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_wnmqu3t', 'template_3fvaj8d', e.target, 'Ci-C0Z5Ngr7F1-t8E')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <div>
            <Navbar color="var(--color-primary-light)" />
            <h4 style={{marginTop:"25px", textAlign:"center"}}> Get In Touch</h4>
                
                
            <div className="contact_container">
                <div className="contact_options">
                    <div className="contact_opt">
                        <MdEmail/>
                        <h4>Email</h4>
                        <h5>maryamartey07@gmail.com</h5>
                        <a href="mailto:maryamartey07@gmail.com" target="_blank">Send Email</a>
                    </div>
                    <div className="contact_opt">
                        <ImLinkedin/>
                        <h4>LinkedIn</h4>
                        <h5>maryamartey07@gmail.com</h5>
                        <a href="https://www.linkedin.com/in/mary-amartey-0388a9185" target="_blank">Send Message</a>
                    </div>
                    <div className="contact_opt">
                        <BsMessenger/>
                        <h4>Messenger</h4>
                        <h5>maryamartey07@gmail.com</h5>
                        <a href="https://m.me/mary.amartey.528" target="_blank">Send Message</a>
                    </div>
                </div>
                <div className="container4 border" 
                    style={{backgroundImage:`url('${headerBackground}')`}} >
                        <h1  style={{marginTop:"25px", textAlign:"center", color:"white"}}>
                            Contact Form
                        </h1>
                    <form className="row" onSubmit={sendEmail} >
                        
                        <input type="text" name="name" placeholder="Name" className="form-control"/>
                    
                        <input type="email" name="user_email" placeholder="Email"  className="form-control"/>
                    
                        <input type="text" name="subject" placeholder="Subject"   className="form-control"/>

                        <textarea name ='message' rows='8' placeholder="Message"   className="form-control"/>

                        <input type= "submit" value="Send" className=" btn btn-primary" style={{marginTop:"25px", textAlign:"center"}} />
                    </form>
                </div>
            </div>

            
                <hr></hr>
        
   

        <FloatingNav/>
        
        </div>
    )
}