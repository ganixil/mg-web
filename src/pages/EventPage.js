import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
function EventPage(){
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    let calendars = [
        {calendarId: process.env.REACT_APP_GOOGLE_CALENDAR_ID,color: "#B241D1"}
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
          border: 3px solid red;
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