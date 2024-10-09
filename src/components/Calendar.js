import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { gapi } from "gapi-script";
import "../styles/Calendar.css";
import { useTranslation } from "react-i18next";
function Calendar(){
    const [events, setEvents] = useState([]);
    const {t} = useTranslation();
    const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
    const CAL_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;
    const getEvents = (calendarID, apiKey) => {
        function initiate() {
          gapi.client
            .init({
              apiKey: apiKey,
            })
            .then(function () {
              return gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                params :{
                  singleEvents: true,
                  timeMin: (new Date()).toISOString(),
                  showDeleted: false,
                  maxResults: 3,
                  orderBy: 'startTime'
                }  
              });
            })
            .then(
              (response) => {
                let events = response.result.items;
                setEvents(events);
              },
              function (err) {
                console.log("ERROR", err)
                return [false, err];
              }
            );
        }
        gapi.load("client", initiate);
      };
    useEffect(() => {
        const events = getEvents(CAL_ID, API_KEY);
        setEvents(events);
      }, []);

    const convertTime = (dateTime) =>{
        const splittedDate = dateTime.split("T");
        var hour = parseInt(splittedDate[1].substring(0,2));
        var AmOrPm = hour >=12 ? 'pm' :'am';
        hour = (hour %12) || 12;
        var minutes = splittedDate[1].substring(3,5);
        var finalTime = splittedDate[0] +" "+ hour + ":" +minutes + " "+AmOrPm;
        return finalTime;
      }
    

    return(
      <div className="eventContainer">
        <h1 className="eventTitle">
            {t('home.event.event-title')}
        </h1>
        <ul className = "events">
            {events?.map((event) => (
                <li key={event.id} >
                    <h3>{event.summary}</h3>
                    <p>Location: <b>{event.location ? event.location : 'NONE'}</b></p>
                    
                    {event.start.date ? <p><b>{event.start.date}</b> to <b>{event.end.date}</b></p>
                     : <p><b>{convertTime(event.start.dateTime)}</b> to <b>{convertTime(event.end.dateTime)}</b></p>
                    }
                </li>
            ))}
            </ul>
            <button className="showMore" type="button">
              <Link to="/event">{t('home.event.more')}</Link>
            </button>  
      </div>  
    )
}
export default Calendar;