

import i from './interCard.module.scss' 
import h from '../../components/Header/Header.module.scss' 
import s from '../Home.module.scss' 
import CardKarzinaAdd from '../../components/Content/img/cardKarzinaAdd.svg';
import CardKarzina from '../../components/Content/img/cardKarzina.svg';

import { useParams } from 'react-router-dom'
import Card from '../../components/Content/Card'
import ContentLogo from '../../components/Content/ContentLogo'
import { Link } from 'react-router-dom';

export default function InterCard ({
    
    addBasket,
    Goods,
    isAddedToCart,
    karzinkaTovar,
    setIsAddedToCart

}) {

    const params = useParams()
    const userId = Goods.findIndex(user => user.id === +params.userId)
    const mas = Goods[userId]

    return (


        <>
        
        {mas &&

        <section className={i.section__inter}>

            <div className={h.container}>
                
                <div className={i.inter}>
                    
                    <div className={i.inter__flex}>

{mas && mas.images && mas.images[0] && mas.images[0].images ? (

    <img src={mas.images[0].images} alt="img" className={i.inter__flex__img} />

  ) : (

    <p>No image available</p>

)}
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

          <Link to={'/basket'}>
          
          <img
            src={CardKarzina}
            id={mas.id}
            onClick={() => {
              addBasket(mas.id);
              setIsAddedToCart(true); // Установите состояние isAddedToCart в true, когда товар добавляется в корзину
            }}
            className={s.mycard__item__footer__kar}
            alt="svg"
          />
          
          </Link>


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