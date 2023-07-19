
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/about/About';
import KidsMenu from './pages/KidsMenu/KidsMenu';
import InterCard from './pages/InterCard/InterCard';
import ScrollToTop from './ScrollTop';
import Combo from './pages/combo/Combo';
import Reg from './pages/Auth/Reg';
import Login from './pages/Auth/Login';
import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Basket from './pages/Basket/Basket';

function App() {

  const [isActive , setIsActive] = useState(false)

  return (

  

    <BrowserRouter>
    
      <div className="App">

        <ScrollToTop />

        <Header isActive={isActive} />

        <Routes>

        <Route path='/'  element={<Home />} />

        <Route path='/register'  element={<Reg />} />

        <Route path='/login'  element={<Login />} />

        <Route path='/combo'  element={<Combo />} />

        <Route path='/about'  element={<About />} />

        <Route path='/kidsmenu'  element={<KidsMenu />} />

        <Route path='/intercard'  element={<InterCard />} />

        <Route path='/basket'  element={<Basket />} />

        </Routes>

        <Footer />

      </div>
    
    </BrowserRouter>


  );

}

export default App;
