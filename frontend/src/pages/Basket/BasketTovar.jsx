import b from './Basket.module.scss';

import h from '../../components/Header/Header.module.scss';
import X from '../../components/Header/img/del.svg';
import axios from 'axios';
import { useState } from 'react';

export default function BasketTovar({ setCountInfo, countInfo, removeBasket, ...info }) {
  const [count, setCount] = useState(info.count || 1);

  async function countPlus() {
    try {
      if (info && info.id) {
        await axios.patch(
          `http://127.0.0.1:8000/api/goods/${info.id}/shopping_cart/`,
          {
            count: count + 1,
          },
          {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          }
        );

        // Обновляем состояние count с помощью setCount
        setCount((prevCount) => prevCount + 1);

        const updatedCountInfo = Array.isArray(countInfo)
          ? countInfo.map((item) => (item.goods.id === info.id ? { ...item, count: item.count + 1 } : item))
          : [];
        setCountInfo(updatedCountInfo);

        // Используем актуальное значение count для правильного отображения суммы товара
        const updatedPrice = info.price * (count + 1);
        setCountInfo((prevInfo) => ({ ...prevInfo, count: prevInfo.count + 1, price: updatedPrice }));
      }
    } catch (err) {
      console.error(err);
    }
  }

  async function countMinus() {
    try {
      if (info && info.id && count > 1) {
        await axios.patch(
          `http://127.0.0.1:8000/api/goods/${info.id}/shopping_cart/`,
          {
            count: count - 1,
          },
          {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          }
        );

        // Обновляем состояние count с помощью setCount
        setCount((prevCount) => prevCount - 1);

        const updatedCountInfo = Array.isArray(countInfo)
          ? countInfo.map((item) => (item.goods.id === info.id ? { ...item, count: item.count - 1 } : item))
          : [];
        setCountInfo(updatedCountInfo);

        // Используем актуальное значение count для правильного отображения суммы товара
        const updatedPrice = info.price * (count - 1);
        setCountInfo((prevInfo) => ({ ...prevInfo, count: prevInfo.count - 1, price: updatedPrice }));
      }
    } catch (err) {
      console.error(err);
    }
  }

  const tokenTwo = localStorage.getItem('token');

  return (
    <div className={b.map__item}>
      <div className={b.map__item__flex}>
        {info && info.images && info.images[0] && info.images[0].images ? (
          <img src={info.images[0].images} alt="img" className={h.nav__kar__item_info_img} />
        ) : (
          <p>No image available</p>
        )}
        <div className={b.map__item__info}>
          <p>{info.title}</p>
          {/* Используем актуальное значение суммы товара */}
          <p>{info.price * count} руб.</p>
        </div>
      </div>
      <div className={h.nav__kar__item__fun}>
        <div className={h.nav__kar__item__fun__add} onClick={countMinus}>
          -{/* Уменьшение товара */}
        </div>
        <h3>{count}</h3>
        <div className={h.nav__kar__item__fun__add} id={info && info.id} onClick={countPlus}>
          +{/* Увеличение товара */}
        </div>
        <img src={X} className={h.nav__danniy__header__exit} alt="exit" id={info.id} onClick={() => removeBasket(info.id)} />
      </div>
    </div>
  );
}
