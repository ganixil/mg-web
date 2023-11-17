import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
function EventPage(){
    const API_KEY = "AIzaSyAE_SfzHZeGjlBTBWISet1pP2P0tLUXKyA";
    let calendars = [
        {calendarId: "1e379f30dc16b0098d1f99b1e55dabd38944f356c561572b2c6294ff915ef3fa@group.calendar.google.com",color: "#B241D1"}
    ];

    let styles = {
        //you can use object styles (no import required)
        calendar: {
          borderWidth: "3px", //make outer edge of calendar thicker
        },
      
        //you can also use emotion's string styles
        today: css`
          /* highlight today by making the text red and giving it a red border */
          color: red;
          border: 1px solid red;
        `,
      };
    
    const language = "EN";

    return(
        <div>
            <Calendar 
                apiKey={API_KEY} 
                calendars={calendars}
                styles={styles}
                language={language}/>
        </div>
    );
}

export default EventPage;