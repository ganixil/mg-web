import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
//import { Dropdown } from "react-bootstrap";
import "../styles/Nav.css"
import LanguageSelector from "./LanguageSelector";

function Nav(){
    const {t} = useTranslation();

    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            
            <ul className="navigation">
                <li><Link to="/">{t('app.home')}</Link></li>
                <li><Link to="/about">{t('app.about')}</Link></li>
                <li><Link to="/news">{t('app.news')}</Link></li>
                <li><Link to="/event">{t('app.event')}</Link></li>
                <li><Link to="/document">{t('app.document')}</Link></li>
                <li><Link to="/contact">{t('app.contact_us')}</Link></li>
                <LanguageSelector />
            </ul>
        </div>
    );
}

export default Nav;