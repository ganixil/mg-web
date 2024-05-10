import React from 'react';
import { Link } from 'react-router-dom';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from "@firebase/firestore";
import '../styles/pages/NewsPage.css'
import { useTranslation } from 'react-i18next';
function NewsPage() {
    const [articles, setArticles] = useState([]);
    const [t, i18n] = useTranslation();
    const ArticleCollectionRef = collection(db, "articleCollections");
    useEffect(() => {
        const getArticlesData = async () => {
            const data = await getDocs(query(ArticleCollectionRef, orderBy("date", "desc")));
            setArticles(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
        }
        getArticlesData()
    }, [])
    const concise = (html) => {
        return React.Children.toArray(parse(html).props.children)[0];
    }

    const getContent = (article) => {
        const currentLanguage = i18n.language;
        return article.translated[currentLanguage];
    }

    return (
        <div className='newsPage'>
            <section class="vertical-news-section">
            {articles.map((article, index) =>
                <div key={index} className='newsArticle'>
                    <Link to='/news/article' state={{ title: article.title, content: article.translated, images: article.images, date: article?.date?.toDate().toDateString() }}>
                        <article class="vertical-news-article">
                            <h2 class="vertical-news-title">{article.title}</h2>
                            <p class="vertical-news-abbreviation">{concise(getContent(article))} ...</p>
                            <p class="vertical-news-date"><FontAwesomeIcon icon={faNewspaper}/> &nbsp; 
                            {article?.date?.toDate().toDateString()} &nbsp; </p>
                        </article>
                        <hr class="news-divider"/>
                    </Link>
                </div>
            )}
            </section>
        </div>
    );
}

export default NewsPage;