import { Link } from 'react-router-dom';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import data from '../data/news';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/pages/NewsPage.css'
function NewsPage(){
    return (
        <div className='newsPage'>
           {data.map((article, index) => 
                <div key={index} className='newsWrapper'>
                    <Link to='/news/article' state={{ title: article.title, content: article.content, date: article.date}}>
                        <div className='news-title'>
                            <p><FontAwesomeIcon icon={faNewspaper}/> &nbsp; 
                            {article.date} &nbsp; {article.weight === "new" &&
                            <h3 className='tag' >New!!</h3>
                            }
                            </p>
                            <div className='articleTitle-container'>
                            <h3 className='articleTitle'>{article.title}</h3>
                            </div>
                        </div> 
                        <p>{article.content.slice(3,125)} ...</p>
                    </Link>
                </div>
                
            )}
        </div>
    );
}

export default NewsPage;