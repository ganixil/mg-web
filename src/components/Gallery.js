import '../styles/Gallery.css';
import ImageGallery from "react-image-gallery";
import carousel1 from '../assets/images/carousel/carousel1.jpg';
import carousel2 from '../assets/images/carousel/carousel2.jpg';
import carousel3 from '../assets/images/carousel/carousel3.jpg';
import carousel4 from '../assets/images/carousel/carousel4.jpg';
import carousel5 from '../assets/images/carousel/carousel5.jpg';
import largelogo from '../assets/images/logo_large.png';
function Gallery(){
    const images = [
        {
          original: largelogo,
          thumbnail: largelogo,
        },
        {
          original: carousel1,
          thumbnail: carousel1,
        },
        {
          original: carousel2,
          thumbnail: carousel2,
        },
        {
          original: carousel3,
          thumbnail: carousel3,
        },
        {
          original: carousel4,
          thumbnail: carousel4,
        },
        {
          original: carousel5,
          thumbnail: carousel5,
        },
    ];
    return(
        <>
            <ImageGallery items={images} />
        </>
    );
}

export default Gallery;