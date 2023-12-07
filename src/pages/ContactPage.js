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

        <label>Building #</label>
        <select name="building" required>
            <option disabled selected value=""> -- Select your building number -- </option>
            <option value="139-10_Building1">139-10 (Building #1)</option>
            <option value="139-16_Building1">139-16 (Building #1)</option>
            <option value="140-08_Building2">140-08 (Building #2)</option>
            <option value="140-14_Building2">140-14 (Building #2)</option>
            <option value="141-10_Building3">141-10 (Building #3)</option>
            <option value="141-16_Building3">141-16 (Building #3)</option>
        </select>

        <label>Apartment #</label>
        <select name="apartment" required>
            <option disabled selected value=""> -- Select your apartment number -- </option>
            {retriveApartmentNumbers().map((apt) =>
                <option value={apt}>{apt}</option>
            )}
        </select>
        <input type="submit" value="Send" />
      </form>
    );
}

export default ContactPage;