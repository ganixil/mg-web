import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Routing from './pages/Routing';

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routing />
    </BrowserRouter>    
  );
}

export default App;
