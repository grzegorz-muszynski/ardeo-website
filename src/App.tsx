import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Preloader from './components/Preloader';
import Projects from './components/Projects/Projects';
import Slider from './components/Slider';
// import Thanks from './components/Thanks';

import './sass/components/About.scss';
import './sass/components/Projects/Card/Card.scss';
import './sass/components/Contact.scss';
import './sass/components/Footer.scss';
import './sass/components/Header.scss';
import './sass/components/Home.scss';
import './sass/components/Preloader.scss';
import './sass/components/Projects/Projects.scss';
import './sass/components/Slider.scss';
// import './sass/components/Thanks.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3850);
  }, []);

  return (
    <Router>
      <div id="App">
          <Routes>
            <Route path='/' element={
              <>
                {loading && (<Preloader/>)}
                <Header/>
                <Home/>
                <Slider/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
              </>
            }/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;