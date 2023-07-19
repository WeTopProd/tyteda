import k from './KidsMenu.module.scss'
import h from '../../components/Header/Header.module.scss'
import s from '../Home.module.scss'
import CardInfoKids from './ContentKids/CardInfoKids'
import CardKids from './ContentKids/CardKids'

export default function KidsMenu () {
    return (

        <>

        <section className={k.section__menu}>
            <div className={h.container}>

                <div className={k.menu}>
                    
                    <p className={k.menu__title}>
                    Детское меню
                    </p>

                    <p className={k.menu__subtitle}>
                    Наше детское меню включает в себя разнообразные блюда, которые не только вкусные, но и питательные. Мы используем только свежие и натуральные ингредиенты, чтобы обеспечить вашего ребенка здоровой пищей
                    </p>


                </div>

            </div>
        </section>

        <section className={k.section__mycard}>
            <div className={h.container}>
                
            <div className={s.mycard}>

               {CardInfoKids.map( (info , index) => {
                return <CardKids {...info} key={index} />
               } )}
                
            </div>

            </div>
        </section>
        
        </>
        

    )
}