
import { Link } from 'react-router-dom'
import h from './Header/Header.module.scss'


export default function MyZakazCards ({ ...info}) {

    let arr = info.goods

    // console.log(arr.images[0].images);

    let domen = 'http://127.0.0.1:8000'

    return (

            <div className={h.nav__zakaz__item__tovar__item}>

    {arr.images && arr.images[0] && arr.images[0].images ? (

        <img
            src={domen + arr.images[0].images}
            alt="img"
            className={h.nav__zakaz__item__tovar__item__img}
        />

    ) : (

        <p>No image available</p>

    )}

                <div>

                    <p className={h.nav__zakaz__item__tovar__item__text}>
                    {arr.title}  {info.count}.шт
                    </p>

                    <p className={h.nav__zakaz__item__tovar__item__text}>
                    {arr.price} руб.
                    </p>

                    <p>{info.count} шт</p>

                </div>

            </div>

    )

}