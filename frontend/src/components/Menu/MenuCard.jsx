import img1 from '../../pages/combo/img/1.svg'
import img2 from '../../pages/combo/img/2.svg'
import img3 from '../../pages/combo/img/3.svg'
import img4 from '../../pages/combo/img/4.svg'
import img5 from '../../pages/combo/img/5.svg'
// import { Link } from 'react-router-dom';
// import s from '../../Home.module.scss';

import c from '../../pages/combo/Combo.module.scss'
// import CardKarzina from '../Content/img/cardKarzina.svg';
// import CardKarzinaAdd from '../Content/img/cardKarzina.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFavoritesContext } from '../../FavoritesContext';
import { useHeartContext } from '../ProductContainer';


export default function MenuCard({ addBasket, isAddedToCart, isActive, ...info }) {
    const { favorites, setFavorites } = useFavoritesContext();

    const { heart, setHeart } = useHeartContext(info.id);

    useEffect(() => {
        setHeart(info.is_favorited);
    }, [info.is_favorited]);

    async function toggleFavorites(id) {

        const newHeartState = !heart; // Calculate the new heart state before setting it
        setHeart(newHeartState);

        try {
            await axios.post(`http://127.0.1:8000/api/goods/${info.id}/favorite/`, null, {

                headers: {
                    'content-type': 'application/json',
                    authorization: `Token ${tokenTwo}`,
                },

            });

            const res = await axios.get('http://127.0.1:8000/api/goods/?is_favorited=true', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Token ${tokenTwo}`,
                },
            });

            setFavorites(res.data.results);

            setFavorites((prevFavorites) =>
                prevFavorites.map((favorite) =>
                    favorite.id === info.id ? { ...favorite, is_favorited: newHeartState } : favorite
                )

            );

        } catch (error) {
            console.error(error);
        }
    }

    async function favoritesDelete(id) {

        const newHeartState = !heart; // Calculate the new heart state before setting it
        setHeart(newHeartState);

        try {

            await axios.delete(`http://127.0.1:8000/api/goods/${info.id}/favorite/`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Token ${tokenTwo}`,
                },
            });

            const res = await axios.get('http://127.0.1:8000/api/goods/?is_favorited=true', {
                headers: {
                    'content-type': 'application/json',
                    authorization: `Token ${tokenTwo}`,
                },
            });

            setFavorites(res.data.results);

            setFavorites((prevFavorites) =>
                prevFavorites.map((favorite) =>
                    favorite.id === info.id ? { ...favorite, is_favorited: newHeartState } : favorite
                )

            );

        } catch (error) {
            console.error(error);
        }
    }
    const navigate = useNavigate()

    const btnFeforiteLike = () => {
        navigate('/login')
    }

    const tokenTwo = localStorage.getItem('token');

    const divStyle = {
        margin: '5px',
        padding: '15px'
    };

    return (

        <div className={c.menu__item}>

            <p className={c.menu__item__title}>
                {info.deyweek}
            </p>

            <div className={c.menu__item__ul}>

                <li className={c.menu__item__ul__li}>
                    <img src={img1} alt="" />
                    <p>{info.text1}</p>
                </li>

                <li className={c.menu__item__ul__li}>
                    <img src={img2} alt="" />
                    <p>{info.text2}</p>

                </li>

                <li className={c.menu__item__ul__li}>
                    <img src={img3} alt="" />
                    <p>{info.text3}</p>
                </li>

                <li className={c.menu__item__ul__li}>
                    <img src={img4} alt="" />
                    <p>{info.text4}</p>
                </li>

                <li className={c.menu__item__ul__li}>
                    <img src={img5} alt="" />
                    <p>{info.text5}</p>

                </li>

            </div>

        </div>

    )
}