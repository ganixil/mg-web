import "../styles/About.css";
import {useTranslation} from "react-i18next";
function About(){
    const {t} = useTranslation();

    return(
        <div className="aboutContainer">
            <h1>{t('home.about')}</h1>
            <h3>Our History</h3>
            <p><b>Currently Under Construction :)</b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default About;