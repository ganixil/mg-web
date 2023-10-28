import data from '../data/news';
import Article from './Article';
function News(){
    const maxArticle = 10;
    return(
        <>
            {data.map((article) => 
                <Article 
                    title={article.title}
                    content={article.content}
                    />
            )}  
        </>
    );
}

export default News;