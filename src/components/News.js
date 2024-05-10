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
    const dataForDisplay = articles.slice(0,4);

    // shorten whole article into small descriptions
    const concise = (html) => {
        return React.Children.toArray(parse(html).props.children)[0];
    }

    const getContent = (article) =>{
        const currentLanguage = i18n.language;
        return article.translated[currentLanguage];
    }

    const isRecentNews = (newsDate) => {
        const today = new Date();
        const limit = 10;
        const limitDate = new Date();
        limitDate.setDate(today.getDate() - limit);

        if(newsDate >= limitDate){
            return true;
        }
        return false;
    }

    return(
        <div className="articleContainer">
            <div className='coopNews'>
                <Link to="/news"><h1>{t('home.coop_news.title')}</h1></Link>
            </div>
            <div className="newspaper-news-section">
            {dataForDisplay.map((article, index) => 
                <div key={index} className='newsWrapper'>
                    <Link to='/news/article' state={{ title: article.title,
                                                     content: article.translated, 
                                                     images: article.images,
                                                     date: article?.date?.toDate().toDateString()}}>
                        <article class="newspaper-news-article">
                            {isRecentNews(article.date.toDate()) ? (<div class="important-news-indicator"></div>) : null}
                            <h2 class="newspaper-news-title">{article.title}</h2>
                            <p class="newspaper-news-abbreviation">{concise(getContent(article))} ... </p>
                            <p class="newspaper-news-date"><FontAwesomeIcon icon={faNewspaper}/> &nbsp; 
                            {article?.date?.toDate().toDateString()} &nbsp; </p>
                        </article>
                    </Link>
                </div>
                
            )}
            </div>
            <Link to="/news" className="showMore">{t('home.coop_news.more')}</Link>
        </div>
    );
}

export default News;