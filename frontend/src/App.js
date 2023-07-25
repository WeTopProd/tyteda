
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
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Basket from './pages/Basket/Basket';
import axios from 'axios';

function App() {


  const [isActive , setIsActive] = useState(false)

  useEffect(() => {

    // При монтировании компонента проверяем, есть ли данные об авторизации в localStorage
    const isUserAuthorized = localStorage.getItem('isAuthorized') === 'true';
    setIsActive(isUserAuthorized);

  }, []);

    const [token, setToken] = useState('')
    
    const tokenTwo = localStorage.getItem('token')


  return (

  

    <BrowserRouter>
    
      <div className="App">

        <ScrollToTop />

         <Header token={token} isActive={isActive} setIsActive={setIsActive}  />

        <Routes>

        <Route path='/'  element={<Home />} />

        <Route path='/register'  element={<Reg />} />

        <Route path='/login'  element={<Login setToken={setToken} setIsActive={setIsActive} token={token} />} />

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
