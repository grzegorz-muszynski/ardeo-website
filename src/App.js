import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
import Preloader from './components/Preloader';
import Slider from './components/Slider';
// import ThanksPol from './components/ThanksPol';
// import ThanksEng from './components/ThanksEng';

import './sass/components/About.scss';
// import './sass/components/Contact.scss';
// import './sass/components/Footer.scss';
// import './sass/components/Gallery.scss';
import './sass/components/Header.scss';
import './sass/components/Home.scss';
// import './sass/components/Thanks.scss';
import './sass/components/Preloader.scss';
import './sass/components/Slider.scss';
// import './sass/helpers/variables.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

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
              </>
            }/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
