import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, query} from "@firebase/firestore";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import '../styles/pages/AboutPage.css'
function AboutPage(){

    const AboutUsCollectionRef = collection(db, "aboutUsCollection");
    const {t, i18n} = useTranslation();
    const [aboutUs, setAboutUs] = useState([]);
    useEffect(() => {
        const getAboutUsData = async () =>{
            const data = await getDocs(query(AboutUsCollectionRef));
            setAboutUs(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getAboutUsData()
    },[])

    return (
        <div className='aboutPage'>
            <div class="container">
                {aboutUs.length === 0 ?(
                    <p>Loading ...</p>
                ):(parse(aboutUs[0].translated[i18n.language]))}
            </div>
        </div>
    )

}

export default AboutPage;