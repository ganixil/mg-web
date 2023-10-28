import { Link } from "react-router-dom";

function Nav(){
    return (
        <>
            <img className="logo" src="" alt="logo"/>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/board">Board</Link></li>
            </ul>
            <ul className="language">
                <li>English</li>
                <li>Language Option1</li>
                <li>Language Option2</li>
                <li>Language Option3</li>
            </ul>
        </>
    );
}

export default Nav;