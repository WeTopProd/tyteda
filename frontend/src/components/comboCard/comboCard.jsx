
import c from './comboCard.module.scss'

import CardKarzina from '../Content/img/cardKarzina.svg'
import comboJsonFormat from './comboJsonFormat'

export default function ComboCard ({...info}) {
    return (
        
        <div className={c.item}>

            <div className={c.item__fon}>

           <img src={info.Img} alt="" className={c.item__img} />

            </div>
            

           <div className={c.item__info}>
            
            <p className={c.item__info__title}>
            {info.Dish_Name}
            </p>

            <div className={c.item__info__flex}>

                <p className={c.item__info__flex__text}>
                    {info.BludText}
                </p>

            </div>

            <p className={c.item__info__gram}>
            {info.Gram} г.
            </p>

            <div className={c.item__info__footer}>
                
                <p className={c.item__info__footer__sum}>
                {info.Dish_price} руб.
                </p>

                <div className={c.item__info__footer__comb}>
                    
                    <button className={c.comb__plus}>
                        -
                    </button>

                    <p className={c.comb__text}>
                        1
                    </p>

                    <button className={c.comb__plus}>
                        +
                    </button>

                </div>

                <img src={CardKarzina} alt="" />

            </div>

           </div>

        </div>

    )
}