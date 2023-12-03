import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
// import Gallery from './components/Gallery';
import Header from './components/Header.tsx';
import Home from './components/Home.tsx';
import Preloader from './components/Preloader';
import Projects from './components/Projects/Projects.tsx';
import Slider from './components/Slider.tsx';
// import ThanksPol from './components/ThanksPol';
// import ThanksEng from './components/ThanksEng';

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

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3650);
  // }, []);

  return (
    <Router>
      <div id="App">
          <Routes>
            <Route exact path='/' element={
              <>
                {/* {loading && (<Preloader/>)} */}
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
