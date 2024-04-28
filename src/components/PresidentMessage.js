import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, query, orderBy} from "@firebase/firestore";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import '../styles/PresidentMessage.css';
function PresidentMessage(){
    // retrieve president's message from firestore
    const [message, setMessage] = useState([]);
    const MiscCollectionRef = collection(db, "miscCollection");
    useEffect(() => {
        const getMessageData = async () =>{
            const data = await getDocs(query(MiscCollectionRef, orderBy("date", "desc")));
            setMessage(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getMessageData()
    },[])
    
    const {t} = useTranslation();

    return(
        <div className="presMessage">
            <h1>{t('home.p_msg')}</h1>
            {message.length > 0 ? <div>{parse(message[0].p_message)}</div> : <p>Currently
                there is no message</p>}
        </div>
    );
}

export default PresidentMessage;