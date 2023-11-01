import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import '../styles/ArticlePage.css'
function ArticlePage(){
    const location = useLocation()
    const { title, content,date} = location.state;
    return (
        <>
            <h1 className="title">{title}</h1>
            <h3 className="date">{date}</h3>
            <div className="content">{parse(content)}</div>
        </>
    );
}

export default ArticlePage;