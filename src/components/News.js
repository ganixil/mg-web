import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import {db} from "../firebase-config";
import {collection, getDocs, query, orderBy} from "@firebase/firestore";
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useTranslation} from "react-i18next";
import '../styles/News.css';
function News(){
    // an expand panel implementation
    const [expanded, setExpanded] = useState(false);
    // retrieve article from firestore
    const [articles, setArticles] = useState([]);
    const {t, i18n} = useTranslation();
    const _ = require('lodash');
    const ArticleCollectionRef = collection(db, "articleCollections");

    // retrieve article data and sorted by date
    useEffect(() => {
        const getArticlesData = async () =>{
            const data = await getDocs(query(ArticleCollectionRef, orderBy("date", "desc")));
            setArticles(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getArticlesData()
    },[])

    // only display 4 to 8 articles in the main page
    const dataForDisplay = expanded ? articles.slice(0,8) : articles.slice(0,4);

    // shorten whole article into small descriptions
    const concise = (html) => {
        return React.Children.toArray(parse(html).props.children)[0];
    }

    const getContent = (article) =>{
        const currentLanguage = i18n.language;
        return article.translated[currentLanguage];
    }

    return(
        <div className="articleContainer">
            <div className='coopNews'>
                <Link to="/news"><h2>{t('home.coop_news.title')}</h2></Link>
            </div>
          
            {dataForDisplay.map((article, index) => 
                <div key={index} className='newsWrapper'>
                    <Link to='/news/article' state={{ title: article.title,
                                                     content: article.translated, 
                                                     images: article.images,
                                                     date: article?.date?.toDate().toDateString()}}>
                        <div className='news-title'>
                            <p><FontAwesomeIcon icon={faNewspaper}/> &nbsp; 
                            {article?.date?.toDate().toDateString()} &nbsp; 
                            </p>
                            <div className='articleTitle-container'>
                            <h3 className='articleTitle'>{article.title}</h3>
                            </div>
                        </div> 
                        <div>{concise(getContent(article))} ...</div>
                    </Link>
                </div>
                
            )}
            <button className="showMore" type="button" onClick={()=> setExpanded(!expanded)}>
                    {expanded ? t('home.coop_news.less'): t('home.coop_news.more')}
            </button>  
        </div>
    );
}

export default News;