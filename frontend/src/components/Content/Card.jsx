import s from '../../pages/Home.module.scss'
import CardKarzina from './img/cardKarzina.svg'
import love from './img/heart.svg'
import CardLove from '../Header/img/lovetwo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useFavoritesContext } from '../../FavoritesContext'
import Tovar from '../Tovar/Tovar'
import { useHeartContext } from '../ProductContainer'

export default function Card ({...info}) {

    const { favorites, setFavorites } = useFavoritesContext();

    const { heart, setHeart } = useHeartContext(info.id);

    useEffect(() => {
      setHeart(info.is_favorited);
    }, [info.is_favorited, setHeart]);

    async function toggleFavorites(id) {
        setHeart(!heart);
    
        await axios.post(
          `http://127.0.0.1:8000/api/goods/${info.id}/favorite/`,
          null,
          {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          }
        );
    
        await axios
          .get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          })
          .then((res) => {
            setFavorites(res.data.results); // Обновление списка избранных товаров в контексте
          })
          .catch((err) => console.error(err));

          setFavorites((prevFavorites) =>
          prevFavorites.map((favorite) =>
            favorite.id === info.id ? { ...favorite, is_favorited: true } : favorite
          ))
      }
    
      async function favoritesDelete(id) {
        setHeart(!heart);
    
        await axios
          .delete(`http://127.0.0.1:8000/api/goods/${info.id}/favorite/`, {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          })
          .catch((err) => console.error(err));
    
        await axios
          .get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          })
          .then((res) => {
            setFavorites(res.data.results); // Обновление списка избранных товаров в контексте
          })
          .catch((err) => console.error(err));

          setFavorites((prevFavorites) =>
          prevFavorites.map((favorite) =>
            favorite.id === info.id ? { ...favorite, is_favorited: false } : favorite
          ))
      }



    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
  
      axios.get('http://127.0.0.1:8000/api/goods/', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
  
      })
  
      .then((res) => {

        setImageUrls(res.data.results)

       })

      .catch((err) => console.error(err))
  
  }, [])




  const tokenTwo = localStorage.getItem('token')

    return (

        <div  className={s.mycard__item}>

            <div className={s.mycard__item__fon}>

    <svg
     id={info.id}
     onClick={ !heart  ? (event) => toggleFavorites(event.currentTarget.id) : (event) => favoritesDelete(event.currentTarget.id) }

    width="25px" height="25px" className={s.mycard__item__fon__live} viewBox="0 0 24 24" fill="#00000000" xmlns="http://www.w3.org/2000/svg"><path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z"
    
    fill={ heart ? 'rgb(223, 28, 28)' : '#000'}
    
    /></svg>



    {imageUrls.map((item, index) => (

          item.images.map((image, idx) => (
            <img key={index + '-' + idx} src={image.images} alt={`Image ${index}-${idx}`} className={s.mycard__item__fon__img} />
          ))

        ))}

            </div>
            
            <div className={s.mycard__item__info}>

                <Link to='/intercard' className={s.mycard__item__info__title}>
                {info.title}
                </Link>

                <p className={s.mycard__item__info__subtitle}>
                {info.weight} г.
                </p>
                
            </div>

            <p className={s.mycard__item__info__subtitle}>
                {info.calories} ккал
                </p>

            <p className={s.mycard__item__subtitle}>
            {info.compound}
            </p>


            <div className={s.mycard__item__footer}>
                
                <p className={s.mycard__item__footer__sum}>
                {info.price} руб.
                </p>


                <img src={CardKarzina} alt="" />

            </div>

        </div>

    )
}