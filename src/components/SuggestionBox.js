import React from 'react';
import { useState } from "react";
import emailjs from 'emailjs-com';
import contactImg from "../assets/img/contact-img.svg";

export const SuggestionBox = () => {
  const [buttonText, setButtonText] = useState('Send');
  function sendEmail(e) {
    e.preventDefault();  
    setButtonText("Sending...");
    emailjs.sendForm('service_jp2002', 'template_k3zfvxg', e.target, 'rgevejfeQipQt75qb')
      .then((result) => {
          window.location.reload() 
      }, (error) => {
          console.log(error.text);
      });
  }


return (
<form className="contact-form" onSubmit={sendEmail}>
  <section className="newsletter-bx wow slideInUp">  
  <div className='part1'>    
    <h3>Open For Suggestion</h3>
      <div className="new-suggestion-bx">                
        <textarea rows="6" name="html_message" placeholder="Suggestion...."></textarea>
      </div>
      <div className="new-email-bx">
        <input type="email" name="from_email" placeholder="Email Address" />
      </div>
      <div className="new-button-bx">
        <button type="submit" value="send"><span>{buttonText}</span></button>
      </div>  
    </div>
    <div className="part2">   
      <img className="animat" src={contactImg} alt="Contact Us"/>
    </div>
  </section> 
</form>
);
}
