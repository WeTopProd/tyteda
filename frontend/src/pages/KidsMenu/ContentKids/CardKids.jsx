import s from '../../Home.module.scss'
import CardKarzina from './img/cardKarzina.svg'
import CardKarzinaAdd from '../../../components/Content/img/cardKarzinaAdd.svg'

export default function CardKids ({addBasket, isAddedToCart,...info}) {

    return (

        <div className={s.mycard__itemkids}>

            <div className={s.mycard__item__fon}>

        {info && info.images && info.images[0] && info.images[0].images ? (

        <img src={info.images[0].images} alt="img" className={s.mycard__item__fon__img} />

        ) : (

        <p>No image available</p>

        )}

            </div>
            
            <div className={s.mycard__item__info}>

                <p className={s.mycard__item__info__title}>
                {info.title}
                </p>

                <p className={s.mycard__item__info__subtitle}>
                {info.weight} г.
                </p>
                
            </div>

            <div className={s.mycard__item__footer}>
                
                <p className={s.mycard__item__footer__sum}>
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

            {isAddedToCart ? <p className={s.mycard__item__footer__text}>Товар добавлен в карзину</p> : ''}

        </div>

    )
}