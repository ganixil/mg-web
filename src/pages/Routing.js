import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NewsPage from "./NewsPage";
import BoardPage from "./BoardPage";
function Routing() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
  
        <Route path="/about" element={<AboutPage />} />
  
        <Route path="/news" element={<NewsPage />} />

        <Route path="/board" element={<BoardPage />} />
      </Routes>
    );
  }

export default Routing;