
import r from './Reviews.module.scss'
import h from '../../components/Header/Header.module.scss'
import rewimg from './rew.png'
import { Link } from 'react-router-dom';

export default function Reviews () {
    return (

        <section className={r.section__reviews}>
            <div className={h.container}>

                <div className={r.reviews__flex}>

                <div className={r.reviews}>

                <img src={rewimg} className={r.reviews__img} alt="img" />

                <Link target='_blank' to='https://yandex.ru/search/?text=tuteda&clid=2574587&win=584&lr=213' className={r.reviews__button}>
                Посмотреть все отзывы
                </Link>

                </div>

                </div>

            </div>
        </section>

    )
}