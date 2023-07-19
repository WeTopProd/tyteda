import d from './Delivery.module.scss'
import h from '../../components/Header/Header.module.scss'

export default function Delivery () {
    return (
        
        <section className={d.section__delivery}>
            <div className={h.container}>
                

    <div className={d.delivery}>
        
        <div className={d.delivery__info}>

            <p className={d.delivery__info__title}>Бесплатная доставка</p>
            <p className={d.delivery__info__subtitle}>при заказе от 1 500 руб</p>

            <div className={d.delivery__info__center}>

                <div className={d.delivery__info__center__one}>
                    <div className={d.box__one}></div>
                    <p className={d.box__title}>Зона 1</p>
                    <p className={d.box__text}> - 100 руб</p>
                </div>

                <div className={d.delivery__info__center__one}>
                    <div className={d.box__two}></div>
                    <p className={d.box__titleTwo}>Зона 2</p>
                    <p  className={d.box__text}> - 200 руб</p>
                </div>

            </div>

            <p className={d.delivery__info__title}>Время доставки </p>
            <p className={d.delivery__info__subtitle}>от 60 мин</p>

        </div>

        <div className={d.delivery__map}>

            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A75791a82fb35f4aeb7e063ee72bd63894f7b70fdf2d5c9a962d9509054f61982&amp;source=constructor" width="100%" height="626" frameborder="0"></iframe>

        </div>

    </div>

    <div className={d.delivery__footer}>
        
        <p className={d.delivery__footer__title}>
        вы можете забрать свой заказ сами
        </p>

        <div className={d.delivery__footer__info}>

            <p className={d.delivery__footer__info__text}>
            Адрес: г. Москва, Сталеваров ул., д.14, корпус 1
            </p>

            <p className={d.delivery__footer__info__text}>
            Время работы: с 11:00 до 23:00
            </p>

            <p className={d.delivery__footer__info__text}>
            Телефон: +7 (495) 139-64-44
            </p>

        </div>

    </div>




            </div>
        </section>

    )
}