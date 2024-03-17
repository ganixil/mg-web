import { Link } from "react-router-dom";
import logo from '../assets/images/logo_large.png';
import '../styles/Footer.css';
import { useTranslation } from "react-i18next";
function Footer(){
    const {t} = useTranslation();

    return (
        <footer className="footer">
            <div className="footer_content">
                <div>
                    <img src={logo} alt='logo'/>
                    <h4 className="copyright">&copy;2023 Mitchell Gardens Coop Corp</h4>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">{t('app.home')}</Link></li>
                        <li><Link to="/about">{t('app.about')}</Link></li>
                        <li><Link to="/news">{t('app.news')}</Link></li>
                        <li><Link to="/event">{t('app.event')}</Link></li>
                        <li><Link to="/contact">{t('app.contact_us')}</Link></li>
                    </ul>
                </nav>
                <div className='contactUs_footer'>
                    <h3>Contact US at <a href="mailto:mitchellgardens1@aol.com">mitchellgardens1@aol.com</a></h3>
                    <h4>Mitchell Gardens #1 Coop Corp</h4>
                    <h4>139-10-16 28th Road</h4>
                    <h4>140-08-14 28th Road</h4>
                    <h4>141-10-16 28th Avenue</h4>
                    <h4>Phone Number: xxx-xxx-xxxx</h4>
                    <h4>Office Hours: M-F 9AM-1PM</h4>
                </div>
            </div>
                
        </footer>
    );
}

export default Footer;