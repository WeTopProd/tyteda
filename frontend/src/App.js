
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'

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
      if (!karzinkaTovar.some((item) => item.id === id)) {
        try {
          await axios.post(
            `http://127.0.0.1:8000/api/goods/${id}/shopping_cart/`,
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
          console.error(error);
        }
      }
    
      axios
        .get('http://127.0.0.1:8000/api/goods/?is_in_shopping_cart=true', {
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
        .catch((err) => console.error(err));
    }

    const [Goods , setGoods] = useState([])


    useEffect(() => {
  
      axios.get('http://127.0.0.1:8000/api/goods/', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
  
      })
  
      .then((res) => {

        setGoods(res.data.results)

       })

      .catch((err) => console.error(err))
  
  }, [])

  useEffect(() => {
  
    axios.get('http://127.0.0.1:8000/api/goods/?is_in_shopping_cart=true', {
    
    headers: {
        'Content-Type': 'application/json , multipart/form-data',
        'authorization': `Token ${tokenTwo}`
    }

    })

    .then((res) => {

      if (Array.isArray(res.data.results)) {
          setkarzinkaTovar(res.data.results);
        }

     })

    .catch((err) => console.error(err))

}, [])


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

        />} />

        <Route path='/register'  element={<Reg />} />

        <Route path='/login'  element={<Login setToken={setToken} setIsActive={setIsActive} token={token} />} />

        <Route path='/combo'  element={<Combo />} />

        <Route path='/about'  element={<About />} />

        <Route path='/kidsmenu'  element={<KidsMenu />} />

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


        />} />

        <Route path='/tovar'  element={<Tovar
        
        isAddedToCart={isAddedToCart}

        karzinkaTovar={karzinkaTovar}
        
        addBasket={addBasket}
        

        />} />

        </Routes>

        <Footer />

      </div>

      </HeartProvider>
      
</FavoritesProvider>
    
</BrowserRouter>



  );

}

export default App;
