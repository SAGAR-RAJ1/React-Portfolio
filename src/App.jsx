
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; 
import Footer from './components/Footer';    

function App() {


  return (
    <>
     <Navbar/>
     <Home />
     <hr className="separation"/>
     <About/>
     <hr className="separation wow"/>
     <Portfolio/>
     <hr className="separation"/>
     <Contact/>
     <hr className="separation"/>
     <Footer/>


     


    </>
  )
}

export default App
