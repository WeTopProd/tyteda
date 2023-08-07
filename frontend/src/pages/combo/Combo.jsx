
import c from './Combo.module.scss'
import h from '../../components/Header/Header.module.scss'
import s from '../../pages/Home.module.scss'
import ContentLogo from '../../components/Content/ContentLogo'
import comboJson from '../../components/comboCard/comboJson'
import ComboCard from '../../components/comboCard/comboCard'

import bgOne from './img/022.png'
import bgTwo from './img/033.png'
import { MenuJson } from '../../components/Menu/MenuJSON'
import MenuCard from '../../components/Menu/MenuCard'
import { HashLink } from 'react-router-hash-link'


export default function Combo ({
    
    comboCard,
    isAddedToCart,
    karzinkaTovar,
    setkarzinkaTovar,
    addBasket
    
}) {
    
    let scrollWithOffsett = (el) => {

        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;

        const yOffset = -60;

        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 

    }


    return (

        <>

        <section className={c.section__combo}>

            <div className={h.container}>

                <div className={c.combo__flex}>

                <div className={c.combo}>
                    
                    <p className={c.combo__title}>
                    комбо-обеды
                    </p>
                    

                    <p className={c.combo__subtitle}>
                    Если у вас нет свободного времени на приготовление сытного и домашнего обеда, то доставка комбо-наборов выручит вас. Также это сэкономит ваш бюджет, поскольку заказ комбо-набора обходится дешевле, чем покупка каждого блюда по отдельности. Кроме того, благодаря большому выбору, вы можете наслаждаться разнообразными комбо-наборами в течение всей недели, не повторяясь.
                    </p>

                    <HashLink to='/combo/#combo' scroll={scrollWithOffsett}  className={c.combo__button}>
                    Смотреть меню
                    </HashLink>

                </div>

                </div>      

            </div>

        </section>

        <ContentLogo Title='Преимущества' />

        <div className={s.section__payment}>
             <div className={h.container}>
                
                <div className={s.payment}>
                    
                    <div className={s.payment__item}>

                        <p className={s.payment__item__title} style={{textAlign: 'left'}}>
                        1
                        </p>

                        <p className={s.payment__item__subtitle} style={{textAlign: 'left'}} >
                        Экономия денег
                        </p>

                        <p className={s.payment__item__text} style={{textAlign: 'left'}} >
                        Комбо-обеды продаются за фиксированную цену и обычно являются более доступным вариантом для получения полноценной еды во время обеденного перерыва. 
                        </p>

                    </div>

                    <div className={s.payment__item}>

                        <p className={s.payment__item__title} style={{textAlign: 'left'}}>
                        2
                        </p>

                        <p className={s.payment__item__subtitle} style={{textAlign: 'left'}} >
                        экономия времени
                        </p>

                        <p className={s.payment__item__text} style={{textAlign: 'left'}} >
                        Комбо-обеды обычно предлагаются быстро и готовы к употреблению, что позволяет сэкономить время, которое вы могли бы потратить, ожидая приготовления отдельных блюд.
                        </p>

                    </div>

                    <div className={s.payment__item}>

                        <p className={s.payment__item__title} style={{textAlign: 'left'}}>
                          3
                        </p>

                        <p className={s.payment__item__subtitle} style={{textAlign: 'left'}} >
                        полноценное питание
                        </p>

                        <p className={s.payment__item__text} style={{textAlign: 'left'}} >
                        Комбо-обеды обычно включают в себя комплексные блюда, что означает, что вы можете получить полноценный питательный состав, который удовлетворит вашу потребность в белках, углеводах и витаминах.
                        </p>

                    </div>  

                    <div className={s.payment__item}>

                        <p className={s.payment__item__title} style={{textAlign: 'left'}}>
                          4
                        </p>

                        <p className={s.payment__item__subtitle} style={{textAlign: 'left'}} >
                        Простота заказа
                        </p>
                        
                        <p className={s.payment__item__text} style={{textAlign: 'left'}} >
                        Комбо-обеды могут быть заказаны очень просто. Обычно они имеют простую структуру меню и все, что вам нужно сделать, это выбрать вариант, который вам нравится.
                        </p>

                    </div>   

                                    

                </div>

             </div>
        </div>

        <section className={c.section__banner}>
            <div className={h.container}>
                
                <div className={c.banner}>
                    
                    <p className={c.banner__title}>
                    При покупке комбо-обедов на неделю
                    </p>

                    <p className={c.banner__title}>
                    7 бутылок морса в подарок!
                    </p>

                </div>

            </div>
        </section>

        <section className={c.section__combocard}>
            
            <img src={bgOne} className={c.combocard__one} alt="img" />

    
            
            <div className={h.container}>
                
                <div className={c.combocard}>

        {comboCard.map( (info , index) => {
            return <ComboCard  addBasket={addBasket}  isAddedToCart={karzinkaTovar.some((item) => item.id === info.id)} {...info} key={index} />
        } )}

                </div>
                
            </div>
        </section>


        <section className={c.section__reklama}>
            

        <img src={bgTwo} className={c.combocard__two} alt="img" />


            <div className={h.container}>
                
                <p className={c.reklama__title}>
                При заказе любого комбо-обеда
                </p>

                <p className={c.reklama__subtitle}>
                хлеб, столовые приборы и салфетки
                </p>

                <p className={c.reklama__subtitle}>
                входят в набор БЕСПЛАТНО
                </p>

            </div>
        </section>


        <section className={c.section__menu} id='combo'>

        <ContentLogo Title='Меню на неделю' />

            <div className={h.container}>
                
            <div className={c.menu}>

           {MenuJson.map( (info , index) => {
            return <MenuCard {...info} key={index} />
           } )}
            

            </div>

            </div>
        </section>
        
        </>
        

    )
}