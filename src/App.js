import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routing from './pages/Routing';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='AppContainer'>
        <Nav />
        <Routing />
        <Footer/>
      </div>
    </BrowserRouter>    
  );
}

export default App;
