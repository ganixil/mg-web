import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NewsPage from "./NewsPage";
import ArticlePage from "./ArticlePage";
import ContactPage from "./ContactPage";
import EventPage from "./EventPage";
import DocumentPage from "./DocumentPage";
function Routing() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
  
        <Route path="/about" element={<AboutPage />} />
  
        <Route path="/news" element={<NewsPage />} />

        <Route path="/event" element={<EventPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/document" element={<DocumentPage />} />

        <Route path="/news/article" element={<ArticlePage />}/>


      </Routes>
    );
  }

export default Routing;