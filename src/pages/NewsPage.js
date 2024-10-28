import React from 'react';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { db } from "../firebase-config";
import { collection, getDocs, query, orderBy } from "@firebase/firestore";
import '../styles/pages/NewsPage.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NewsPage() {
    const [articles, setArticles] = useState([]);
    const { t, i18n } = useTranslation();
    const ArticleCollectionRef = collection(db, "articleCollections");

    useEffect(() => {
        const getArticlesData = async () => {
            const data = await getDocs(query(ArticleCollectionRef, orderBy("date", "desc")));
            setArticles(data.docs.map((elem) => ({ ...elem.data(), id: elem.id })));
        };
        getArticlesData();
    }, []);

    const concise = (html) => {
        return React.Children.toArray(parse(html).props.children)[0];
    };

    const getContent = (article) => {
        const currentLanguage = i18n.language;
        return article.translated[currentLanguage] || article.translated['en'] || "Content not available"; // Default to English
    };

    return (
        <div className='newsPage'>
            <section className="vertical-news-section">
                {articles.map((article, index) => {
                    const uniquePath = `/news/article/${article.id}`; // Use Firestore document ID for the unique path
                    return (
                        <div key={article.id} className='newsArticle'> {/* Use article.id for the key */}
                            <Link to={uniquePath} state={{ 
                                title: article.title, 
                                translated: article.translated, 
                                images: article.images, 
                                date: article?.date?.toDate().toDateString() 
                            }}>
                                <article className="vertical-news-article">
                                    <h2 className="vertical-news-title">{article.title}</h2>
                                    <p className="vertical-news-abbreviation">{concise(getContent(article))} ...</p>
                                    <p className="vertical-news-date">
                                        <FontAwesomeIcon icon={faNewspaper} /> &nbsp; 
                                        {article?.date?.toDate().toDateString()} &nbsp; 
                                    </p>
                                </article>
                                <hr className="news-divider" />
                            </Link>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default NewsPage;