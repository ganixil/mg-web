import './App.css';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import Board from './components/Board';
import News from './components/News';

function App() {
  return (
    <>
      <Nav/>
      <Gallery/>
      <News/>
      <About/>
      <Board/>
    </>    
  );
}

export default App;
