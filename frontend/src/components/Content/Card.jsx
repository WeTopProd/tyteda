
import s from '../../pages/Home.module.scss';
import CardKarzina from './img/cardKarzina.svg';
import CardKarzinaAdd from './img/cardKarzinaAdd.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../../FavoritesContext';
import { useHeartContext } from '../ProductContainer';

export default function Card({ addBasket, isAddedToCart, ...info }) {

  const { favorites, setFavorites } = useFavoritesContext();

  const { heart, setHeart } = useHeartContext(info.id);

  useEffect(() => {
    setHeart(info.is_favorited);
  }, []);

  async function toggleFavorites(id) {

    setHeart(!heart);

    try {
      await axios.post(`http://127.0.0.1:8000/api/goods/${info.id}/favorite/`, null, {
        headers: {
          'content-type': 'application/json',
          authorization: `Token ${tokenTwo}`,
        },
      });

      const res = await axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
        headers: {
          'content-type': 'application/json',
          authorization: `Token ${tokenTwo}`,
        },
      });

      setFavorites(res.data.results);

      setFavorites((prevFavorites) =>
        prevFavorites.map((favorite) =>
          favorite.id === info.id ? { ...favorite, is_favorited: true } : favorite
        )
        
      );

    } catch (error) {
      console.error(error);
    }
  }

  async function favoritesDelete(id) {
    setHeart(!heart);

    try {
      await axios.delete(`http://127.0.0.1:8000/api/goods/${info.id}/favorite/`, {
        headers: {
          'content-type': 'application/json',
          authorization: `Token ${tokenTwo}`,
        },
      });

      const res = await axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
        headers: {
          'content-type': 'application/json',
          authorization: `Token ${tokenTwo}`,
        },
      });

      setFavorites(res.data.results);

      setFavorites((prevFavorites) =>
        prevFavorites.map((favorite) =>
          favorite.id === info.id ? { ...favorite, is_favorited: false } : favorite
        )

      );

    } catch (error) {
      console.error(error);
    }
  }

  const tokenTwo = localStorage.getItem('token');


  console.log(info.images[0].images);

  return (


    <div className={s.mycard__item}>

      <div className={s.mycard__item__fon}>

        <svg
          id={info.id}
          onClick={!heart ? (event) => toggleFavorites(event.currentTarget.id) : (event) => favoritesDelete(event.currentTarget.id)}
          width="25px"
          height="25px"
          className={s.mycard__item__fon__live}
          viewBox="0 0 24 24"
          fill="#00000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
            fill={heart ? 'rgb(223, 28, 28)' : '#000'}
          />
        </svg>

        {info && info.images && info.images[0] && info.images[0].images ? (

        <img src={info.images[0].images} alt="img" className={s.mycard__item__fon__img} />

        ) : (

        <p>No image available</p>

        )}

      </div>

      <div className={s.mycard__item__info}>
      
        <Link to={`/intercard/${info.id}`} className={s.mycard__item__info__title}>
          {info.title}
        </Link>

        <p className={s.mycard__item__info__subtitle}>{info.weight} г.</p>

      </div>

      <p className={s.mycard__item__info__subtitle}>{info.calories} ккал</p>

      <p className={s.mycard__item__subtitle}>{info.compound}</p>

      <div className={s.mycard__item__footer}>

        <p className={s.mycard__item__footer__sum}>{info.price} руб.</p>

        {isAddedToCart ? (

          <div>
            <img src={CardKarzinaAdd} alt="svg" className={s.mycard__item__footer__add} />
          </div>

        ) : (

          <img
            src={CardKarzina}
            id={info.id}
            onClick={() => addBasket(info.id)}
            className={s.mycard__item__footer__kar}
            alt="svg"
          />

        )}

      </div>

      {isAddedToCart ? <p className={s.mycard__item__footer__text}>Товар добавлен в карзину</p> : ''}

    </div>
  );
}