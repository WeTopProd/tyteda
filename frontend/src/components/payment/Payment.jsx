import s from '../../pages/Home.module.scss'
import h from '../Header/Header.module.scss'

export default function Payment () {
    return (

        <div className={s.section__payment}>
             <div className={h.container}>
                
                <div className={s.payment}>
                    
                    <div className={s.payment__item}>

                        <p className={s.payment__item__title}>
                        1
                        </p>

                        <p className={s.payment__item__subtitle}>
                        Картой онлайн
                        </p>

                        <p className={s.payment__item__text}>
                        Оплатите заказ прямо на сайте, выбрав соответсвующий способ оплаты
                        </p>

                    </div>

                    <div className={s.payment__item}>

                        <p className={s.payment__item__title}>
                        2
                        </p>

                        <p className={s.payment__item__subtitle}>
                        Картой курьеру
                        </p>

                        <p className={s.payment__item__text}>
                        Оплатите банковской картой через мобильный терминал, который будет у курьера
                        </p>

                    </div>

                    <div className={s.payment__item}>

                        <p className={s.payment__item__title}>
                          3
                        </p>

                        <p className={s.payment__item__subtitle}>
                        Наличными курьеру
                        </p>

                        <p className={s.payment__item__text}>
                        Оплатите наличными курьеру 
                        и он передаст вам вместе с заказом кассовый чек
                        </p>

                    </div>                    

                </div>

             </div>
        </div>

    )
}