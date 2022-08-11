import React from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import contactImg from '../images/andre-guerra-8DADDMMcJnA-unsplash.jpg';


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
            <Navbar color="grey" />
        <div className="container border" 
             style={{marginTop:"50px",
             width: "50%",
             backgroundImage:`url('${contactImg}')`,
             backgroundPosition: 'center',
             backgroundSize:'cover'
             }} >

            <h1  style={{marginTop:"25px", textAlign:"center"}} >
                Contact Form
            </h1>
            <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail} >
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email"  className="form-control"/>

                <label>Subject</label>
                <input type="text" name="subject"  className="form-control"/>

                <label>Message</label>
                <textarea name ='message' rows='8' className="form-control"/>

                <input type= "submit" value="Send" className="form-control btn btn-primary" style={{marginTop:"25px", textAlign:"center"}} />
            </form>
        </div>
        </div>
    )
}