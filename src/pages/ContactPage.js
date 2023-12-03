import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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
      <form ref={form} onSubmit={sendEmail}>
        <label>Topic</label>
        <select name="topic">
            <option value="Contact">Contact</option>
            <option value="Grievance">Grievance</option>
            <option value="Other">Other</option>
        </select>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <label>Apartment #</label>
        <select name="apartment">
            {retriveApartmentNumbers().map((apt) =>
                <option value={apt}>{apt}</option>
            )}
        </select>
        <input type="submit" value="Send" />
      </form>
    );
}

export default ContactPage;