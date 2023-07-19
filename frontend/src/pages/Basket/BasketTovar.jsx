import b from './Basket.module.scss'
import h from '../../components/Header/Header.module.scss'

export default function BasketTovar ({...info}) {
    return (
        
        <div className={b.map__item}>

        <div className={b.map__item__flex}>

            <img src={info.FotoKar} alt="ajnj" />

            <div className={b.map__item__info}>
                <p>{info.subtitle}</p>
                <p>{info.price} руб.</p>
            </div>

        </div>

    <div className={h.nav__kar__item__fun}>

        <div className={h.nav__kar__item__fun__add}>
             -
        </div>

        <h3>5</h3>

        <div className={h.nav__kar__item__fun__add}>
            +
        </div>

    </div>
     
            

</div>

    )
}