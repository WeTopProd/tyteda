import { useEffect, useState } from 'react';
import h from '../Header/Header.module.scss'
import del from '../Header/img/del.svg'
import axios from 'axios';
import { useFavoritesContext } from '../../FavoritesContext';
import { useHeartContext } from '../ProductContainer';

export default function Tovar ({...info}) {

    const [imageUrls, setImageUrls] = useState([]);
    const { favorites, setFavorites } = useFavoritesContext();
    const { heart, setHeart } = useHeartContext(info.id);

    const tokenTwo = localStorage.getItem('token');

    useEffect(() => {
        setHeart(info.is_favorited);
    }, []);

    useEffect(() => {
        async function fetchGoods() {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
                    headers: {
                        'Content-Type': 'application/json , multipart/form-data',
                        authorization: `Token ${tokenTwo}`,
                    },
                });
                setImageUrls(res.data.results);
            } catch (err) {
                console.error(err);
            }
        }
  
        fetchGoods();
  
        // Добавим зависимость heart, чтобы useEffect выполнился при каждом изменении heart
    }, [heart]);
  
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
        } catch (err) {
            console.error(err);
        }
    }

    // Сохранение состояния heart в localStorage при его изменении
    useEffect(() => {
        localStorage.setItem(`heartStatus_${info.id}`, heart);
    }, []);

    return (
        <div className={h.nav__kar__item}>
            <div className={h.nav__kar__item_info}>
                {imageUrls.map((item, index) => (
                    item.images.map((image, idx) => (
                        <img key={index + '-' + idx} src={image.images} alt={`Image ${index}-${idx}`} className={h.nav__kar__item_info_img} />
                    ))
                ))}
                <div className={h.nav__kar__item_info_titles}>
                    <p>{info.price} руб.</p>
                    <p>{info.title}</p>
                </div>
                <img src={del} id={info.id} onClick={(event) => favoritesDelete(event.currentTarget.id)} className={h.nav__kar__item_info__del} alt="svg" />
            </div>
        </div>
    );
}