

import i from './interCard.module.scss' 
import h from '../../components/Header/Header.module.scss' 
import s from '../Home.module.scss' 

import { Link } from 'react-router-dom'

import blud from './img/inter__bl.svg'
import CardInfo from '../../components/Content/CardInfo'
import Card from '../../components/Content/Card'
import ContentLogo from '../../components/Content/ContentLogo'

export default function InterCard () {
    return (

        <>
        <section className={i.section__inter}>
            <div className={h.container}>
                
                <div className={i.inter}>
                    
                    <div className={i.inter__flex}>
                        <img src={blud} alt="img" className={i.inter__flex__img} />
                    </div>

                    <div className={i.inter__item}>

                        <p className={i.inter__item__title}>
                        Стейк из сёмги
                        </p>

                        <p className={i.inter__item__subtitle}>
                        Нежнейшая сёмга, обжаренная в имбирно-горчичном соусе.
                        </p>

                        <p className={i.inter__item__subtitle}>
                            <span>Состав:</span> Сёмга, Помидоры черри, Кинза, Оливковое масло, Дольки лимона
                        </p>

                        <div className={i.inter__item__info}>
                            
                            <p className={i.inter__item__info__title}>
                            180 г.
                            </p>

                            <p className={i.inter__item__info__title}>
                            350 калл.
                            </p>

                        </div>

                        <div className={i.inter__item__info}>
                            
                            <p className={i.inter__item__info__sum}>
                            720 руб.
                            </p>

                            <Link to='' className={i.inter__item__info__btn}>
                            + В корзину
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <section className={i.section__mycard}>

        <ContentLogo Title='Что-нибудь еще?' />
        
         <div className={h.container}>

            
             
            
            <div className={s.mycard}>

               {CardInfo.map( (info , index) => {
                return <Card {...info} key={index} />
               } )}
                
            </div>

         </div>
    </section>
        
        </>
        

    )
}