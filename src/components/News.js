import { Link } from 'react-router-dom';
import data from '../data/news';
import '../styles/News.css';
function News(){
    //const maxArticle = 10;
    return(
        <div className="articleContainer">
            <h1>Coop News</h1>
            {data.map((article) => 
                <Link to='/news/article' state={{ title: article.title, content: article.content, date: article.date}}>
                    <h2>{article.title} - {article.date}</h2>
                    <p>{article.content.slice(0,50)} ...</p>
                </Link>
            )}  
        </div>
    );
}

export default News;