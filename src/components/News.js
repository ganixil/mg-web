import { Link } from 'react-router-dom';
import { useState } from 'react';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import data from '../data/news';
import '../styles/News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function News(){
    const [expanded, setExpanded] = useState(false);
    const dataForDisplay = expanded ? data.slice(0,8) : data.slice(0,4);


    return(
        <div className="articleContainer">
            <div className='coopNews'>
                <Link to="/news"><h2>Coop News</h2></Link>
            </div>
            {dataForDisplay.map((article, index) => 
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
            <button className="showMore" type="button" onClick={()=> setExpanded(!expanded)}>
                    {expanded ? 'Show Less': 'Show More'}
            </button>  
        </div>
    );
}

export default News;