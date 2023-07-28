

import i from './interCard.module.scss' 
import h from '../../components/Header/Header.module.scss' 
import s from '../Home.module.scss' 
import CardKarzinaAdd from '../../components/Content/img/cardKarzinaAdd.svg';
import CardKarzina from '../../components/Content/img/cardKarzina.svg';

import { useParams } from 'react-router-dom'
import Card from '../../components/Content/Card'
import ContentLogo from '../../components/Content/ContentLogo'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function InterCard ({
    
    isAddedToCart,
    karzinkaTovar,
    addBasket,
    Goods,

}) {

    

    const params = useParams()
    const userId = Goods.findIndex(user => user.id === +params.userId)
    const mas = Goods[userId]

    console.log(mas);

    return (


        <>
        
        {mas &&

        <section className={i.section__inter}>

            <div className={h.container}>
                
                <div className={i.inter}>
                    
                    <div className={i.inter__flex}>

                        <img src={mas.images[0].images} alt="img" className={i.inter__flex__img} />

                    </div>

                    <div className={i.inter__item}>

                        <p className={i.inter__item__title}>
                        {mas.title}
                        </p>

                        <p className={i.inter__item__subtitle}>
                       {mas.description}
                        </p>

                        <p className={i.inter__item__subtitle}>
                            <span>Состав:</span> {mas.compound}
                        </p>

                        <div className={i.inter__item__info}>
                            
                            <p className={i.inter__item__info__title}>
                            {mas.weight} г.
                            </p>

                            <p className={i.inter__item__info__title}>
                            {mas.calories} калл.
                            </p>

                        </div>

                        <div className={i.inter__item__info}>
                            
                            <p className={i.inter__item__info__sum}>
                            {mas.price} руб.
                            </p>


        {isAddedToCart ? (

          <div>
            <img src={CardKarzinaAdd} alt="svg" className={s.mycard__item__footer__add} />
          </div>

        ) : (

          <img
            src={CardKarzina}
            id={mas.id}
            onClick={() => addBasket(mas.id)}
            className={s.mycard__item__footer__kar}
            alt="svg"
          />

        )}                            

      </div>

      {isAddedToCart ? <p className={s.mycard__item__footer__text}>Товар добавлен в карзину</p> : ''}

                    </div>

                    </div>

                </div>

        </section>

        }
 
        <section className={i.section__mycard}>

        <ContentLogo Title='Что-нибудь еще?' />
        
         <div className={h.container}>

            
             
            
            <div className={s.mycard}>

               {Goods.map( (info , index) => {
                return <Card {...info} key={index}

                addBasket={addBasket}  isAddedToCart={karzinkaTovar.some((item) => item.id === info.id)}  {...info}

                />
               } )}
                
            </div>

         </div>
        </section>
        
        </>

        
        

    )
}