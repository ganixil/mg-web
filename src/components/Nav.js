import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
//import { Dropdown } from "react-bootstrap";
import "../styles/Nav.css"

function Nav(){
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li><Link to="/document">Document</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Nav;