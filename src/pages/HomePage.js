import Gallery from "../components/Gallery";
import News from "../components/News";
import Board from "../components/Board";
import About from "../components/About";
import "../styles/HomePage.css";
function HomePage(){
    return (
        <>
            <div className="topPanel"> 
                <Gallery />
                <News />
            </div>
            <div className="bottomPanel">
                <Board />
                <About />
            </div>
        </>
    );
}

export default HomePage;