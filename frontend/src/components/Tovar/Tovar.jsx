import h from '../Header/Header.module.scss'
import del from '../Header/img/del.svg'

export default function Tovar ({...info}) {
    return (
        
    <div className={h.nav__kar__item}>
                
        <div className={h.nav__kar__item_info}>
            
            <img src={info.FotoKar} className={h.nav__kar__item_info_img} alt="svg" />

            <div className={h.nav__kar__item_info_titles}>
                <p>{info.price} руб.</p>
                <p>{info.subtitle}</p>
            </div>

            <img src={del} className={h.nav__kar__item_info__del} alt="svg" />

        </div>

    </div>

    )
}