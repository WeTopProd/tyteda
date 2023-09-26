
import { BrowserRouter, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import React, { useRef } from 'react';
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
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function App() {

	var scroll = Scroll.scroller;
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {

		// При монтировании компонента проверяем, есть ли данные об авторизации в localStorage
		const isUserAuthorized = localStorage.getItem('isAuthorized') === 'true';
		setIsActive(isUserAuthorized);

	}, []);

	const [token, setToken] = useState('')

	const [isAddedToCart, setIsAddedToCart] = useState();

	const [karzinkaTovar, setkarzinkaTovar] = useState([]);
	
	const [address, setAddress] = useState('')


	async function addBasket(id) {

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

	const [Goods, setGoods] = useState([])

	const [comboCard, setComboCard] = useState([])





	useEffect(() => {

		axios.get('https://tyteda.ru/api/goods/', {


		})

			.then((res) => {

				const nonComboItems = res.data.results.filter(item => !item.title.startsWith("Комбо"));

				const comboItems = res.data.results.filter(item => item.title.startsWith("Комбо"));

				const reversedComboItems = comboItems.reverse();

				setComboCard(reversedComboItems);

				setGoods(nonComboItems);
			})

	}, []);



	useEffect(() => {

		if (tokenTwo) {

			axios.get('https://tyteda.ru/api/goods/?is_in_shopping_cart=true', {

				headers: {
					'content-type': 'application/json',
					authorization: `Token ${localStorage.getItem('token')}`,
				},

			})

				.then((res) => {

					if (Array.isArray(res.data.results)) {
						setkarzinkaTovar(res.data.results);
					}

				})

		}

	}, [])

	const [totalCartPrice, setTotalCartPrice] = useState(0);

	const params = useParams()

	const tokenTwo = localStorage.getItem('token')


	const [postCard, SetPostCard] = useState([])

	const [postLoading, setPostLoading] = useState(false)

	const [poiskvalue, setPoiskvalue] = useState('')

	const handlePoiskCard = (searchValue1, searchValue2) => {

		scroll.scrollTo('menu', {
			duration: 600,
			delay: 100,
			smooth: true,
			offset: -300,
		});

		axios.get(`https://tyteda.ru/api/goods/?type=${searchValue1}`)
			.then(response1 => {

				console.log(`Response for ${searchValue1}:`, response1.data);

				SetPostCard(response1.data);

				if (searchValue2) {
					axios.get(`https://tyteda.ru/api/goods/?type=${searchValue2}`)
						.then(response2 => {
							console.log(`Response for ${searchValue2}:`, response2.data);
							const combinedData = [...response1.data, ...response2.data];
							SetPostCard(combinedData);
							setPostLoading(true);
						})
						.catch(error => {
							console.error(`Error for ${searchValue2}:`, error);
							setPostLoading(true);
						});
				} else {
					setPostLoading(true);
				}
			})
			.catch(error => {

				console.error(`Error for ${searchValue1}:`, error);

				setPostLoading(true);
			});
	};
	// console.log(postCard, 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
	
	


	return (

		<BrowserRouter>

			<FavoritesProvider>

				<HeartProvider>

					<div className="App">

						<ScrollToTop />

						<Header token={token} isActive={isActive} setIsActive={setIsActive} handlePoiskCard={handlePoiskCard} address={address} setAddress={setAddress}
						/>

						<Routes>

							<Route path='/' element={<Home

								isAddedToCart={isAddedToCart}

								karzinkaTovar={karzinkaTovar}

								addBasket={addBasket}

								setIsAddedToCart={setIsAddedToCart}

								Goods={Goods}

								isActive={isActive}

								setComboCard={setComboCard}

								postCard={postCard}

								SetPostCard={SetPostCard}

								postLoading={postLoading}

								setPostLoading={setPostLoading}

								poiskvalue={poiskvalue}

								setPoiskvalue={setPoiskvalue}

								handlePoiskCard={handlePoiskCard}

							/>} />

							<Route path='/combo' element={<Combo

								comboCard={comboCard}

								isAddedToCart={isAddedToCart}

								karzinkaTovar={karzinkaTovar}

								addBasket={addBasket}

								setIsAddedToCart={setIsAddedToCart}

								totalCartPrice={totalCartPrice}

								setTotalCartPrice={setTotalCartPrice}

							/>} />

							<Route path='/about' element={<About />} />

							<Route path='/kidsmenu' element={<KidsMenu

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
										isActive={isActive}
										isAddedToCart={karzinkaTovar.some((item) => item.id === +params.userId)}

										karzinkaTovar={karzinkaTovar}
										addBasket={addBasket}
										setIsAddedToCart={setIsAddedToCart}
									/>
								}
							/>



							<Route path='/basket' element={<Basket

								isAddedToCart={isAddedToCart}

								setIsAddedToCart={setIsAddedToCart}

								karzinkaTovar={karzinkaTovar}

								setkarzinkaTovar={setkarzinkaTovar}

								addBasket={addBasket}

								Goods={Goods}

								totalCartPrice={totalCartPrice}

								setTotalCartPrice={setTotalCartPrice}

								isActive={isActive}
								address={address} setAddress={setAddress}


							/>} />

							<Route path='/tovar' element={<Tovar

								isAddedToCart={isAddedToCart}

								karzinkaTovar={karzinkaTovar}

								addBasket={addBasket}
								isActive={isActive}


							/>} />

							<Route path='/oplataprav' element={<OplataPrav />} />

							<Route path='/oplatainfo' element={<OplataInfo />} />

							<Route path='/returninfo' element={<ReturnInfo />} />

							<Route path='/policy' element={<Konfidi />} />




							<Route path='/register' element={<Reg />} />

							<Route path='/login' element={<Login setToken={setToken} setIsActive={setIsActive} token={token} />} />

						</Routes>

						<Footer />



					</div>

				</HeartProvider>

			</FavoritesProvider>

		</BrowserRouter>



	);

}

export default App;
