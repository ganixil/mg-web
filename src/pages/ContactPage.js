import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/pages/ContactPage.css'
import { useTranslation } from 'react-i18next';
function ContactPage(){
    const SERVICE_ID = process.env.REACT_APP_EMAIL_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

    const form = useRef();

    const {t} = useTranslation();

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
    <div>
        {/* <form className="contactus_form" ref={form} onSubmit={sendEmail}>
            <h1>{t('contact_us.title')}</h1>
            <label>{t('contact_us.topic')}</label>
            <select name="topic" required>
                <option disabled selected value=""> -- Select a topic -- </option>
                <option value="Contact">Contact</option>
                <option value="Grievance">Grievance</option>
                <option value="Other">Other</option>
            </select>

            <label>{t('contact_us.name')}</label>
            <input type="text" name="from_name" placeholder='your name ...' required/>

            <label>{t('contact_us.email')}</label>
            <input type="email" name="email" placeholder='your email ...'/>

            <label>{t('contact_us.phone')}</label>
            <input type="tel" name="phone" placeholder='your phone number ...'/>

            <label>{t('contact_us.message')}</label>
            <textarea name="message" placeholder='your message ...' required/>

            <label>{t('contact_us.building')} #</label>
            <select name="building" required>
                <option disabled selected value=""> -- Select your building number -- </option>
                <option value="139-10_Building1">139-10 (Building #1)</option>
                <option value="139-16_Building1">139-16 (Building #1)</option>
                <option value="140-08_Building2">140-08 (Building #2)</option>
                <option value="140-14_Building2">140-14 (Building #2)</option>
                <option value="141-10_Building3">141-10 (Building #3)</option>
                <option value="141-16_Building3">141-16 (Building #3)</option>
            </select>

            <label>{t('contact_us.apartment')} #</label>
            <select name="apartment" required>
                <option disabled selected value=""> -- Select your apartment number -- </option>
                {retriveApartmentNumbers().map((apt) =>
                    <option value={apt}>{apt}</option>
                )}
            </select>
            <input type="submit" value="Send" /> 
            </form>*/}
            <div className='contactUsSec'>
                <h3>Contact Us using below methods</h3>
                <h4><a href="mailto:mitchellgardens1@aol.com">mitchellgardens1@aol.com</a></h4>
                <h4>Mitchell Gardens #1 Co-operative Corp.</h4>
                <h4>Phone Number: (718) 463-8380</h4>
                <h4>Office Hours: </h4>
                <h4>M-T-W-F 9AM-Noon</h4>
                <h4>TH: 1PM-4PM</h4>
            </div>
      </div>

    );
}

export default ContactPage;