
import h from '../Header/Header.module.scss'


export default function TovarKarzinka ({...info}) {
    return (
        
        <div className={h.nav__kar__item}>
                
        <div className={h.nav__kar__item_info}>
            
            <img src={info.FotoKar} className={h.nav__kar__item_info_img} alt="svg" />

            <div className={h.nav__kar__item_info_titles}>
                <p>{info.price} руб.</p>
                <p>{info.subtitle}</p>
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