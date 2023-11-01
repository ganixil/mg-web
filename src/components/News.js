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
                    <div className='news-title'>
                        <h2>{article.title}</h2>
                        {article.weight == "new" &&
                        <h2 className='tag' >New!!</h2>
                        }
                    </div> 
                    <p>{article.date}</p>
                    <p>{article.content.slice(3,50)} ...</p>
                </Link>
            )}  
        </div>
    );
}

export default News;