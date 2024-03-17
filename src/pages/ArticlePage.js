import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import '../styles/pages/ArticlePage.css'
import { useTranslation } from "react-i18next";

function ArticlePage(){
    const location = useLocation()
    const { title, content,date} = location.state;
    const {t, i18n} = useTranslation();

    const translateContent = (content)=>{
        const currentLanguage = i18n.language;
        return content[currentLanguage];
    }

    return (
        <>
            <h1 className="title">{title}</h1>
            <h3 className="date">{date}</h3>
            <div className="content">{parse(translateContent(content))}</div>
        </>
    );
}

export default ArticlePage;