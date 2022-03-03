import React, {useState} from "react";
import Hero from '../assets/hero-banner.png'
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Projects from './Portfolio';
import Resume from "./Resume";
import '../styles/Main.css'

function Main () {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Projects />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <Contact />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div>
          <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            <img src={Hero} alt="banner" className="hero"/>
          </div>
          {renderPage()}
          <Footer/>
        </div>
      );
}

export default Main