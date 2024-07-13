import "../styles/About.css";
import {useTranslation} from "react-i18next";
function About(){
    const {t} = useTranslation();

    return(
        <div className="aboutContainer">
            <h1>{t('home.about')}</h1>
            <h3>Welcome to Mitchell Gardens No. 1 Coop</h3>
            <p>Located in the vibrant neighborhood of Flushing, New York, Mitchell Gardens No. 1 Co-op offers a unique blend of comfort, community, and convenience. Our cooperative housing community is situated at 13910 28th Road, nestled within a dynamic urban environment that provides easy access to a wide array of amenities and attractions.</p>
        </div>
    );
}

export default About;