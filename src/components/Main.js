import React, {useState} from "react";
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from "./Resume";

function Main () {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
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
          {renderPage()}
          <Footer/>
        </div>
      );
}

export default Main