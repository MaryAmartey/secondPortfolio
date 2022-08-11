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
        <div className="container4 border" 
             style={{backgroundImage:`url('${contactImg}')`}} >

            <h1  style={{marginTop:"25px", textAlign:"center"}} >
                Contact Form
            </h1>
            <form className="row" onSubmit={sendEmail} >
                <label>Name</label>
                <input type="text" name="name" className="form-control"/>

                <label>Email</label>
                <input type="email" name="user_email"  className="form-control"/>

                <label>Subject</label>
                <input type="text" name="subject"  className="form-control"/>

                <label>Message</label>
                <textarea name ='message' rows='8' className="form-control"/>

                <input type= "submit" value="Send" className=" btn btn-primary" style={{marginTop:"25px", textAlign:"center"}} />
            </form>
        </div>
        </div>
    )
}