
import { Link } from 'react-router-dom'
import h from './Header/Header.module.scss'
import location from './Header/img/location.svg'
import MyZakazCards from './MyzakazCard';


export default function MyZakazItem ({MyZakazCard, ...info}) {

    let MyZakazBludo = info.items

    console.log(MyZakazBludo);

    return (

    <div className={h.nav__zakaz__item}>
            
        <div className={h.nav__zakaz__item__header}>

            <Link to='' className={h.nav__zakaz__item__header__location}>
                <img src={location} alt="img" />
                Отследить заказ
            </Link>

            <p className={h.nav__zakaz__item__header__sum}>
            {info.total_price} руб.
            </p>

        </div>

        <p className={h.nav__zakaz__item__header__text}>Цена с учетом доставки</p>


        <div className={h.nav__zakaz__item__tovar}>

        { MyZakazBludo.map((info, index) => {
                    return (
                        <MyZakazCards {...info} key={index} />
                );
        })   }


        </div>

    </div> 

    )
}