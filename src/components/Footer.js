import { Link } from "react-router-dom";
import logo from '../assets/images/logo_large.png';
import '../styles/Footer.css';
function Footer(){
    return (
        <footer className="footer">
            <div className="footer_content">
                <img src={logo} alt='logo'/>
                <nav>
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/board">Board</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className='contactUs_footer'>
                    <h1>Contact US</h1>
                    <h4>Mitchell Gardens #1 Coop Corp</h4>
                    <h4>139-10-16 28th Road</h4>
                    <h4>140-08-14 28th Road</h4>
                    <h4>141-10-16 28th Avenue</h4>
                    <h4>Phone Number: xxx-xxx-xxxx</h4>
                    <h4>Office Hours: M-F 9AM-1PM</h4>
                </div>
            </div>
            <div className="copyright">
                <h4 >&copy; Mitchell Gardens Coop Corp</h4>
            </div>
                
        </footer>
    );
}

export default Footer;