import { useLocation } from "react-router-dom";
function ArticlePage(){
    const location = useLocation()
    const { title, content,date} = location.state;
    return (
        <>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{content}</p>
        </>
    );
}

export default ArticlePage;