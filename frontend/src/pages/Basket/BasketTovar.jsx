import b from './Basket.module.scss';

import h from '../../components/Header/Header.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import X from '../../components/Header/img/del.svg';

export default function BasketTovar({setkarzinkaTovar, removeBasket, ...info }) {


  const [imageUrls, setImageUrls] = useState([]);

  async function fetchGoods() {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/goods/?is_in_shopping_cart=true', {
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

  useEffect(() => {
    fetchGoods(); // Fetch initial data
  }, []);


  const tokenTwo = localStorage.getItem('token');

  return (
    <div className={b.map__item}>
      <div className={b.map__item__flex}>

        {imageUrls.map((item, index) =>
          item.images.map((image, idx) => <img key={index + '-' + idx} src={image.images} alt={`Image ${index}-${idx}`} className={h.nav__kar__item_info_img} />)
        )}

        <div className={b.map__item__info}>
          <p>{info.title}</p>
          <p>{info.price} руб.</p>
        </div>
      </div>

      <div className={h.nav__kar__item__fun}>
        <div className={h.nav__kar__item__fun__add}>-</div>
        <h3>5</h3>
        <div className={h.nav__kar__item__fun__add}>+</div>
        <img
          src={X}
          className={h.nav__danniy__header__exit}
          alt="exit"
          id={info.id}
          onClick={() => removeBasket(info.id)}
        />
      </div>
    </div>
  );
}