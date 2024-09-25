import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, query, orderBy} from "@firebase/firestore";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser';
import '../styles/pages/PrivacyPage.css'
function PrivacyPage(){

    const [terms, setTerms] = useState([]);
    const TermsCollectionRef = collection(db, "termsCollection");
    useEffect(() => {
        const getMessageData = async () =>{
            const data = await getDocs(query(TermsCollectionRef));
            setTerms(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getMessageData()
    },[])
    const {t, i18n} = useTranslation();

    return (
        <div className="privacyPage">
       {terms.length > 0 ?
            parse(terms[0].terms_translated[i18n.language]) : <div></div>}
        </div>
    )
}

export default PrivacyPage;