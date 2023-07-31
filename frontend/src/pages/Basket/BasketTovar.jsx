import b from './Basket.module.scss';

import h from '../../components/Header/Header.module.scss';
import X from '../../components/Header/img/del.svg';

export default function BasketTovar({setkarzinkaTovar, removeBasket, ...info }) {



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