import Gallery from "../components/Gallery";
import News from "../components/News";
import PresidentMessage from "../components/PresidentMessage";
import About from "../components/About";
import Contact from "../components/Contact";
import "../styles/pages/HomePage.css";
function HomePage(){
    return (
        <div className="home">
            <div className="leftPanel">
                <div className="topPanel"> 
                    <PresidentMessage />
                    <Gallery />
                </div>
                <div className="bottomPanel">
                    <About />
                    <Contact />
                </div>
            </div>
            <div className="rightPanel">
                <News />
            </div>

        </div>
    );
}

export default HomePage;