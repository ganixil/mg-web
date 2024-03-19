import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';
import '../styles/pages/ArticlePage.css'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function ArticlePage(){
    const location = useLocation();
    const { title, content, images, date} = location.state;
    const {t, i18n} = useTranslation();
    const storage = getStorage();


    const [imageUrls, setImageUrls] = useState([]);
   
    useEffect(() => {
        const fetchImageUrls = async() => {
            const urls = [];
            if(images !== undefined && images.length != 0){
                for(const image of images){
                    if(!image){
                        console.error("invalid image reference");
                        continue;
                    }
                    try{
                        const url = await getDownloadURL( ref(storage, image));
                        urls.push(url);
                    }catch(error){
                        console.log("Error fetch images", error);
                    }
                }
                setImageUrls(urls);
                }
            
        }
        fetchImageUrls();
    }, [images]);


    const translateContent = (content)=>{
        const currentLanguage = i18n.language;
        return content[currentLanguage];
    }

    return (
        <>
            <h1 className="title">{title}</h1>
            <h3 className="date">{date}</h3>
            <div className="content">{parse(translateContent(content))}</div>
            <div>
                {console.log(imageUrls)}
            {imageUrls.map((url, index)=>
                <div><img key={index} src={url} alt={`Image ${index}`} /></div>
            )}
            </div>
        </>
    );
}

export default ArticlePage;