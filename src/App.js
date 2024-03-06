
import './App.css';
import Navbar from './Componenter/Navbar';    
import Hero from './Componenter/Hero';
import About from './Componenter/About';
import Project from './Componenter/Project';
import Contact from './Componenter/Contact';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from './Componenter/Footer';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
