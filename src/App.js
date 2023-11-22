import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>

     <Header/>

    <About/>
    
    <Portfolio/>

<Footer/>
    </div>


  );
}

export default App;
