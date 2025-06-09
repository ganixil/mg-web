import { useLocation, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import '../styles/pages/ArticlePage.css';
import { db } from "../firebase-config";
import { doc, getDoc } from "@firebase/firestore";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Timestamp } from "firebase/firestore";

function ArticlePage() {
    const { id } = useParams(); // Get the document ID from the URL
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const storage = getStorage();

    const [article, setArticle] = useState(location.state || {});
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        if (!location.state) {
            const fetchArticleData = async () => {
                try {
                    const docRef = doc(db, "articleCollections", id); // Fetch using document ID
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setArticle({ ...docSnap.data(), id: docSnap.id });
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching article:", error);
                }
            };
            fetchArticleData();
        }
    }, [id, location.state]);

    useEffect(() => {
        const fetchImageUrls = async () => {
            const urls = [];
            if (article.images) {
                for (const image of article.images) {
                    try {
                        const url = await getDownloadURL(ref(storage, image));
                        urls.push(url);
                    } catch (error) {
                        console.log("Error fetching image:", error);
                    }
                }
                setImageUrls(urls);
            }
        };
        if (article.images) {
            fetchImageUrls();
        }
    }, [article.images]);

    // Updated translateContent with default fallback to English
    const translateContent = (content) => {
        const currentLanguage = i18n.language; // Get the current language
        if (content && content[currentLanguage]) {
            return content[currentLanguage]; // Return current language if exists
        } 
        if (content && content['en']) {
            return content['en']; // Fallback to English if available
        }
        return "Content Unavailable"; // Return default message if neither exists
    };
    // Assuming the article has been fetched successfully
    const dateString = article.date && article.date instanceof Timestamp 
    ? article.date.toDate().toDateString() 
    : article.date;
    
    return (
        <div className="articlePage">
            <div className="articleContent">
                <h1 className="title">{article.title}</h1>
                <h3 className="date">{dateString}</h3>
                {console.log(article)}
                <div className="content">{parse(translateContent(article.translated))}</div>
                <div className="imageContainer">
                    {imageUrls.map((url, index) => (
                        <div key={index} className="imageBox">
                            <img className="articleImage" src={url} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;