import b from './Basket.module.scss';
import h from '../../components/Header/Header.module.scss';
import X from '../../components/Header/img/del.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BasketTovar({
  setCountInfo,
  countInfo,
  removeBasket,
  setkarzinkaTovar,
  karzinkaTovar,
  ...info
}) {
  const [count, setCount] = useState(info.count || 1);

  const tokenTwo = localStorage.getItem('token');

  const handleCountChange = async (newCount) => {
    try {
      if (newCount >= 1) {
        const updatedCartItem = {
          goods: info.id,
          user: 1,
          count: newCount,
        };

        const response = await axios.patch(
          `http://127.0.0.1:8000/api/goods/${info.id}/shopping_cart/`,
          updatedCartItem,
          {
            headers: {
              'content-type': 'application/json',
              authorization: `Token ${tokenTwo}`,
            },
          }
        );

        if (response.status === 200) {
          setCount(newCount);

          // Обновляем массив countInfo
          const updatedCountInfo = countInfo.map((item) =>
            item.goods.id === info.id ? { ...item, count: newCount } : item
          );
          setCountInfo(updatedCountInfo);

          // Обновляем массив karzinkaTovar
          const updatedKarzinkaTovar = karzinkaTovar.map((item) =>
            item.id === info.id ? { ...item, count: newCount } : item
          );
          setkarzinkaTovar(updatedKarzinkaTovar);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <p>{info.price * count} руб.</p>
        </div>
      </div>

      <div className={h.nav__kar__item__fun}>
        <div className={h.nav__kar__item__fun__add} onClick={() => handleCountChange(count - 1)}>
          -
        </div>
        <h3>{count}</h3>
        <div className={h.nav__kar__item__fun__add} onClick={() => handleCountChange(count + 1)}>
          +
        </div>
        <img
          src={X}
          className={h.nav__danniy__header__exit}
          alt="exit"
          onClick={() => removeBasket(info.id)}
        />
      </div>
    </div>
  );
}
