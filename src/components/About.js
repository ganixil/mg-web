import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, query} from "@firebase/firestore";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import "../styles/About.css";
function About(){
    const AboutUsCollectionRef = collection(db, "aboutUsCollection");
    const {i18n} = useTranslation();
    const [aboutUs, setAboutUs] = useState([]);
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const getAboutUsData = async () =>{
            const data = await getDocs(query(AboutUsCollectionRef));
            setAboutUs(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getAboutUsData()
    },[])

    return(
        <div className="aboutContainer">
            <div class={`box ${expanded ? "expanded" : "collapsed"}`}>
                {aboutUs.length === 0 ?(
                    <p>Loading ...</p>
                ):(parse(aboutUs[0].translated[i18n.language]))}
            </div>
            <button className="expandButton" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Collapse" : "Expand"}
            </button>
        </div>
    );
}

export default About;