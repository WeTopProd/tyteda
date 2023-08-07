
import c from './comboCard.module.scss'
import s from '../../pages/Home.module.scss'

import CardKarzina from '../Content/img/cardKarzina.svg'
import CardKarzinaAdd from '../Content/img/cardKarzinaAdd.svg';

export default function ComboCard ({ addBasket, isAddedToCart,...info}) {
    return (
        
        <div className={c.item}>

            <div className={c.item__fon}>

        {info && info.images && info.images[0] && info.images[0].images ? (

          <img src={info.images[0].images} alt="img"  className={c.item__img} />

        ) : (

          <p>No image available</p>

        )}

            </div>
            

           <div className={c.item__info}>
            
            <p className={c.item__info__title}>
            {info.title}
            </p>

            <div className={c.item__info__flex}>

                <p className={c.item__info__flex__text}>
                    {info.compound}
                </p>

            </div>

            <p className={c.item__info__gram}>
            {info.weight} г.
            </p>

            <div className={c.item__info__footer}>
                
                <p className={c.item__info__footer__sum}>
                {info.price} руб.
                </p>

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

            <div className={c.item__info__footer__text}>

            {isAddedToCart ? <p style={{textAlign: 'left', marginLeft: '0 auto'}} className={c.mycard__item__footer__text}>Товар добавлен в карзину</p> : ''}

            </div>

           </div>

        </div>

    )
}