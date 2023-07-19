import a from './About.module.scss'
import h from '../../components/Header/Header.module.scss'

import img1 from './img/aboutOne.jpg'
import img2 from './img/aboutTwo.jpg'

export default function About () {
    return (
        <section className={a.section__about}>
            <div className={h.container}>

                <div className={a.about__flex}>

                <div className={a.about}>
                    
                    <div className={a.about__item}>
                        <img src={img1} alt="img" className={a.about__item__img} />
                    </div>

                    <div className={a.about__item}>
                        
                        <div className={a.about__item__header}>
                            
                            <div className={a.about__item__header__info}>
                                
                                <h1 className={a.about__item__header__info__title}>
                                    10
                                </h1>

                                <p className={a.about__item__header__info__subtitle}>
                                лет на рынке
                                </p>

                            </div>

                            <div className={a.about__item__header__info}>
                                
                                <h1 className={a.about__item__header__info__title}>
                                1000
                                </h1>

                                <p className={a.about__item__header__info__subtitle}>
                                довольных клиентов
                                </p>

                            </div>

                            <div className={a.about__item__header__info}>
                                
                                <h1 className={a.about__item__header__info__title}>
                                75%
                                </h1>

                                <p className={a.about__item__header__info__subtitle}>
                                клиентов обращаются к нам снова 
                                </p>

                            </div>

                        </div>

                        <p className={a.about__item__text}>
                        Мы рады приветствовать вас в нашей компании по доставке готовой еды! Наша команда профессионалов готова предложить вам широкий выбор блюд, чтобы удовлетворить ваш голод. Вы можете заказать вкусные блюда с доставкой прямо к вашему дому в любое удобное для вас время. Наша миссия - доставить готовую еду прямо к вашему порогу и предоставить удивительные кулинарные впечатления. Не нужно больше тратить время на готовку, просто заказывайте еду на дом у нас!
                        </p>

                    </div>

                </div>

                                
                <div className={a.about}>

                    <div className={a.about__item}>

                        <p className={a.about__item__desc}>
                        Мы гордимся тем, что предлагаем широкий выбор блюд на любой вкус. Наше меню включает в себя разнообразные кухни мира, от классических блюд до экзотических кулинарных изысков. Мы тщательно отбираем свежие и качественные ингредиенты, чтобы гарантировать вам вкусные и питательные блюда, которые будут радовать ваш вкусовой рецептор.
                        </p>


                        <p className={a.about__item__desc}>
                        Одна из наших главных ценностей - это превосходное обслуживание клиентов. Мы стремимся сделать ваш опыт заказа у нас максимально удобным и приятным. Наша дружелюбная команда операторов готова помочь вам с любыми вопросами и запросами, а наши вежливые и профессиональные курьеры доставят вашу еду вовремя и с улыбкой.
                        </p>

                        <p className={a.about__item__desc}>
                        Мы ценим наших клиентов и стремимся к постоянному совершенствованию нашего сервиса. Мы всегда открыты к вашим отзывам и предложениям, чтобы лучше соответствовать вашим ожиданиям.
                        </p>

                        <p className={a.about__item__desc}>
                        Благодарим вас, что выбрали нас в качестве вашего партнера по доставке еды. Мы надеемся продолжать радовать вас вкусными блюдами и отличным обслуживанием.
                        </p>

                    </div>

                    <div className={a.about__item}>
                        <img src={img2} alt="img" className={a.about__item__img} />
                    </div>

                </div>

                </div>
                

            </div>
        </section>
    )
}