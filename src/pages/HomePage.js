import Gallery from "../components/Gallery";
import News from "../components/News";
import PresidentMessage from "../components/PresidentMessage";
import About from "../components/About";
import Document from "../components/Document";
import "../styles/pages/HomePage.css";
import InfoCard from "../components/InfoCard";
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
                    <Document />
                    <InfoCard />
                </div>
            </div>
            <div className="rightPanel">
                <News />
            </div>

        </div>
    );
}

export default HomePage;