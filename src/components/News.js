import { Link } from 'react-router-dom';
import data from '../data/news';
import Article from './Article';
function News(){
    //const maxArticle = 10;
    return(
        <>
            {data.map((article) => 
                <Link to='/news/article' state={{ title: article.title, content: article.content}}>
                    <h2>{article.title}</h2>
                </Link>
            )}  
        </>
    );
}

export default News;