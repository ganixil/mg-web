import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routing from './pages/Routing';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className='AppContainer'>
        <Nav />
        <ScrollToTop />
        <Routing />
        <Footer/>
      </div>
    </BrowserRouter>    
  );
}

export default App;
