import Gallery from "../components/Gallery";
import News from "../components/News";
import PresidentMessage from "../components/PresidentMessage";
import About from "../components/About";
import Contact from "../components/Contact";
import "../styles/pages/HomePage.css";
function HomePage(){
    return (
        <div className="home">
            <div className="topPanel"> 
                <PresidentMessage />
                <Gallery />
                <News />
            </div>
            <div className="bottomPanel">
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default HomePage;