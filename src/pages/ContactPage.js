import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/pages/ContactPage.css'
function ContactPage(){
    const SERVICE_ID = process.env.REACT_APP_EMAIL_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        window.alert("Thank you for submitting, we will be in contact soon");
    };

    const retriveApartmentNumbers = () =>{
        var apartments = [];
        const letters = "ABCDEFG";
        for(let i= 1; i<=6;i++){
            for(let j=0; j<letters.length;j++){
                apartments.push(i.toString() + letters[j]);
            }
        }
        return apartments;
    }
  
    return (
      <form className="contactus_form" ref={form} onSubmit={sendEmail}>
        <h1>Contact Us</h1>
        <label>Topic</label>
        <select name="topic" required>
            <option disabled selected value=""> -- Select a topic -- </option>
            <option value="Contact">Contact</option>
            <option value="Grievance">Grievance</option>
            <option value="Other">Other</option>
        </select>

        <label>Name</label>
        <input type="text" name="from_name" placeholder='your name ...' required/>

        <label>Email</label>
        <input type="email" name="email" placeholder='your email ...'/>

        <label>Phone Number</label>
        <input type="tel" name="phone" placeholder='your phone number ...'/>

        <label>Message</label>
        <textarea name="message" placeholder='your message ...' required/>

        <label>Apartment #</label>
        <select name="apartment" required>
            <option disabled selected value=""> -- Select your apartment number -- </option>
            {retriveApartmentNumbers().map((apt) =>
                <option value="{apt}">{apt}</option>
            )}
        </select>
        <input type="submit" value="Send" />
      </form>
    );
}

export default ContactPage;