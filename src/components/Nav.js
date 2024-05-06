import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import burger from "../assets/icon/burger.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {isMobile} from 'react-device-detect';


import "../styles/Nav.css"
import LanguageSelector from "./LanguageSelector";

function Nav(){
    const {t} = useTranslation();
    const [sticky, setSticky] = useState(false);
    const [expandNav, setExpandNav] = useState(!isMobile);

    // set navigation to be expanded if it is not in mobile device
    const expandNavigation = () =>{
        setExpandNav(!expandNav);
    }

    // when resize, assume to be in desktop mode so expand the navigation
    useEffect(() => {
        const handleWindowWidthChange = () => {
            setExpandNav(!isMobile)
        }
        window.addEventListener('resize', handleWindowWidthChange)
        return () => window.removeEventListener('resize', handleWindowWidthChange);
    })

    // set top nav to be sticky in desktop mode
    useEffect(() =>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 200 && !isMobile)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <div className={`${sticky ? "navbar sticky" : "navbar"}`}>
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <ul className="navigation">
                <li className="burger" onClick={expandNavigation}><img src={burger} alt="burger"/></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/">{t('app.home')}</Link></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/about">{t('app.about')}</Link></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/news">{t('app.news')}</Link></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/event">{t('app.event')}</Link></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/document">{t('app.document')}</Link></li>
                <li className={`${expandNav ? "": "active-nav"}`}><Link to="/contact">{t('app.contact_us')}</Link></li>
                <LanguageSelector />
            </ul>
        </div>
    );
}

export default Nav;