import { useLocation } from "react-router-dom";
function ArticlePage(){
    const location = useLocation()
    const { title, content} = location.state;
    return (
        <>
            <h1>{title}</h1>
            <p>{content}</p>
        </>
    );
}

export default ArticlePage;