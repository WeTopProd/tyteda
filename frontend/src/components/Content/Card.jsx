import s from '../../pages/Home.module.scss'
import CardKarzina from './img/cardKarzina.svg'
import CardLove from '../Header/img/lovetwo.svg'
import { Link } from 'react-router-dom'

export default function Card ({...info}) {

    return (

        <div  className={s.mycard__item}>

            <div className={s.mycard__item__fon}>

            <img src={info.Img} alt="eda" className={s.mycard__item__fon__img} />

            </div>
            
            <div className={s.mycard__item__info}>

                <Link to='/intercard' className={s.mycard__item__info__title}>
                {info.Dish_Name}
                </Link>

                <p className={s.mycard__item__info__subtitle}>
                {info.Gram} г.
                </p>
                
            </div>

            <button className={s.mycard__item__info__live}>
                Добавить в избранное <img src={CardLove} alt="live" />
            </button>

            <p className={s.mycard__item__subtitle}>
            {info.Dish_Info}
            </p>

            <div className={s.mycard__item__footer}>
                
                <p className={s.mycard__item__footer__sum}>
                {info.Dish_price} руб.
                </p>

                <img src={CardKarzina} alt="" />

            </div>

        </div>

    )
}