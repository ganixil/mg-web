import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NewsPage from "./NewsPage";
import BoardPage from "./BoardPage";
import ArticlePage from "./ArticlePage";
function Routing() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
  
        <Route path="/about" element={<AboutPage />} />
  
        <Route path="/news" element={<NewsPage />} />

        <Route path="/board" element={<BoardPage />} />

        <Route path="/news/article" element={<ArticlePage />}/>
      </Routes>
    );
  }

export default Routing;