
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'

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
import { FavoritesProvider } from './FavoritesContext';
import { HeartProvider } from './components/ProductContainer';
import Tovar from './pages/Tovar/Tovar';
import OplataPrav from './components/Footer/OplataPrav';
import OplataInfo from './components/Footer/OplataInfo';
import ReturnInfo from './components/Footer/ReturnInfo';
import Konfidi from './components/Footer/Konfidi';
import ProtectedPage from './ProtectedPage';

function App() {



  const [isActive , setIsActive] = useState(false)

  useEffect(() => {

    // При монтировании компонента проверяем, есть ли данные об авторизации в localStorage
    const isUserAuthorized = localStorage.getItem('isAuthorized') === 'true';
    setIsActive(isUserAuthorized);

  }, []);

    const [token, setToken] = useState('')

    const [isAddedToCart, setIsAddedToCart] = useState();

    const [karzinkaTovar, setkarzinkaTovar] = useState([]);

    async function addBasket(id) {


      const userToken = localStorage.getItem('token');
    
      if (!userToken) {

        Navigate('/login');

        return;
      }

      if (!karzinkaTovar.some((item) => item.id === id)) {

        try {
          await axios.post(

            `https://tyteda.ru/api/goods/${id}/shopping_cart/`,
            null,

            {
              headers: {
                'content-type': 'application/json',
                authorization: `Token ${tokenTwo}`,
              },
            }

          );
    
          // ... (другая логика)
        } catch (error) {
          
        }
      }
    
      axios
        .get('https://tyteda.ru/api/goods/?is_in_shopping_cart=true', {
          headers: {
            'Content-Type': 'application/json , multipart/form-data',
            authorization: `Token ${tokenTwo}`,
          },
        })

        .then((res) => {
          if (Array.isArray(res.data.results)) {
            setkarzinkaTovar(res.data.results);
          }
        })
    }

    const [Goods , setGoods] = useState([])

    const [comboCard , setComboCard] = useState([])


    useEffect(() => {

      axios.get('https://tyteda.ru/api/goods/', {

      })

      .then((res) => {
  
          const nonComboItems = res.data.results.filter(item => !item.title.startsWith("Комбо"));
          
          setGoods(nonComboItems);
  
          const comboItems = res.data.results.filter(item => item.title.startsWith("Комбо"));
  
          const reversedComboItems = comboItems.reverse();
  
          setComboCard(reversedComboItems);
      })



  }, []);


  useEffect(() => {
  
    axios.get('https://tyteda.ru/api/goods/?is_in_shopping_cart=true', {

    })

    .then((res) => {

      if (Array.isArray(res.data.results)) {
          setkarzinkaTovar(res.data.results);
        }

     })

}, [])

    const [totalCartPrice, setTotalCartPrice] = useState(0);

    const params = useParams()
    
    const tokenTwo = localStorage.getItem('token')
    
    return (
  
  <BrowserRouter>

  <FavoritesProvider>

  <HeartProvider>
  
        <div className="App">

             <ScrollToTop />
         <Header token={token} isActive={isActive} setIsActive={setIsActive}  />

         <Routes>

         <Route path='/'  element={<Home
          
          isAddedToCart={isAddedToCart}
  
          karzinkaTovar={karzinkaTovar}
          
          addBasket={addBasket}
  
          setIsAddedToCart={setIsAddedToCart}
  
          Goods={Goods}
  
          />} />
  
          <Route path='/combo'  element={<Combo
          
          comboCard={comboCard}
  
          isAddedToCart={isAddedToCart}
  
          karzinkaTovar={karzinkaTovar}
          
          addBasket={addBasket}
  
          setIsAddedToCart={setIsAddedToCart}
          
          />} />
  
          <Route path='/about'  element={<About />} />
  
          <Route path='/kidsmenu'  element={<KidsMenu
  
                  isAddedToCart={isAddedToCart}
  
                  karzinkaTovar={karzinkaTovar}
                  
                  addBasket={addBasket}
          
                  setIsAddedToCart={setIsAddedToCart}
          
          />} />
  
           <Route
              path="/intercard/:userId"
                element={
                  <InterCard
  
                  Goods={Goods}
  
                  isAddedToCart={karzinkaTovar.some((item) => item.id === +params.userId)}
  
                  karzinkaTovar={karzinkaTovar} 
                  addBasket={addBasket}
                  setIsAddedToCart={setIsAddedToCart}
                  />
                }
            />
  
  
  
          <Route path='/basket'  element={<Basket
          
          isAddedToCart={isAddedToCart}
  
          setIsAddedToCart={setIsAddedToCart}
  
          karzinkaTovar={karzinkaTovar}
          
          setkarzinkaTovar={setkarzinkaTovar}
  
          addBasket={addBasket}
  
          Goods={Goods}
  
          totalCartPrice={totalCartPrice}
  
          setTotalCartPrice={setTotalCartPrice}
  
  
          />} />
  
          <Route path='/tovar'  element={<Tovar
          
          isAddedToCart={isAddedToCart}
  
          karzinkaTovar={karzinkaTovar}
          
          addBasket={addBasket}
          
  
          />} />
  
          <Route path='/oplataprav'  element={<OplataPrav/>} />
  
          <Route path='/oplatainfo'  element={<OplataInfo/>} />
  
          <Route path='/returninfo'  element={<ReturnInfo/>} />
  
          <Route path='/policy'  element={<Konfidi/>} />




          <Route path='/register'  element={<Reg />} />
  
          <Route path='/login'  element={<Login setToken={setToken} setIsActive={setIsActive} token={token} />} />
            
          </Routes>
  
          <Footer />

          
  
        </div>
  
        </HeartProvider>
        
  </FavoritesProvider>
      
  </BrowserRouter>
  
  
  
    );

}

export default App;
