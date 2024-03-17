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
    useEffect(() => {
        const getArticlesData = async () =>{
            const data = await getDocs(query(ArticleCollectionRef, orderBy("date", "desc")));
            setArticles(data.docs.map((elem) => ({ ...elem.data(), id:elem.id})));
        }
        getArticlesData()
    },[])

    const dataForDisplay = expanded ? articles.slice(0,8) : articles.slice(0,4);

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
                                                     date: article?.date?.toDate().toDateString()}}>
                        <div className='news-title'>
                            <p><FontAwesomeIcon icon={faNewspaper}/> &nbsp; 
                            {article?.date?.toDate().toDateString()} &nbsp; 
                            </p>
                            <div className='articleTitle-container'>
                            <h3 className='articleTitle'>{article.title}</h3>
                            </div>
                        </div> 
                        <p>{concise(getContent(article))} ...</p>
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