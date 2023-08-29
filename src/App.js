import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';
import Header from './components/Header';
import Home from './components/Home';
// import ThanksPol from './components/ThanksPol';
// import ThanksEng from './components/ThanksEng';

import './sass/components/About.scss';
// import './sass/components/Contact.scss';
// import './sass/components/Footer.scss';
// import './sass/components/Gallery.scss';
import './sass/components/Header.scss';
import './sass/components/Home.scss';
// import './sass/components/Thanks.scss';
// import './sass/components/Slider.scss';
// import './sass/helpers/variables.scss';

function App() {

  return (
    <Router>
      <div id="App">
          <Routes>
            <Route exact path='/' element={
              <>
                <Header/>
                <Home/>
                <About/>
              </>
            }/>
          </Routes>
      </div>
    </Router>
  );
}
//   return (
//     <Router>
//       <div id="App">
//           <Routes>
//             <Route exact path='/' element={
//               <>
//                 <Header language={'pol'} />
//                 <About language={'pol'} />
//                 <Gallery language={'pol'} />
//                 <Contact language={'pol'} />
//                 <Order language={'pol'} />
//                 <Footer language={'pol'} />
//               </>
//             }/>
//             <Route exact path='/eng' element={
//               <>
//                 <Header />
//                 <About />
//                 <Gallery />
//                 <Contact />
//                 <Order />
//                 <Footer />
//               </>} 
//             />
//           </Routes>
//       </div>
//     </Router>
//   );
// }

export default App;
