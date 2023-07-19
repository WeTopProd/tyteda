
import s from './Home.module.scss'
import h from '../components/Header/Header.module.scss'
import c from '../pages/combo/Combo.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ContentLogo from '../components/Content/ContentLogo';
import Card from '../components/Content/Card';
import CardInfo from '../components/Content/CardInfo';
import Filter from '../components/Filter/Filter';
import Payment from '../components/payment/Payment';
import Delivery from '../components/Delivery/Delivery';
import Reviews from '../components/Reviews/Reviews';
import { Link } from 'react-router-dom';


export default function Home () {

    return (

        <>

        
    <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className={s.home__swiper}
        
        autoplay={{
            delay: 3000,
        }}
        

      >

        <SwiperSlide className={s.home__swiper_slide1}>
            
            <div className={s.container}>

                <div className={s.home__content__one}>
                    

                    <p className={s.home__content_text}>
                    Заказывайте еду быстро, удобно
                    и просто
                    </p>

                    <button className={s.home__content_button}>
                    смотреть меню
                    </button>

                </div>

            </div>
                    
        </SwiperSlide>

        <SwiperSlide className={s.home__swiper_slide2}>

             <div className={s.container}>

                <div className={s.home__content__two}>
                    
                    

                    <p className={s.home__content_textTwo}>
                    комбо-обеды
                    </p>

                    <p className={s.home__content_textTwo}>
                    c 12:00 до 16:00
                    </p>

                    <p className={s.home__content_textThree}>
                       Индивидуальные предложения
                    </p>

                    <Link to={'/combo'} className={s.home__content_button}>
                    Подробнее 
                    </Link>

                </div>

            </div>
            
        </SwiperSlide>


        <SwiperSlide className={s.home__swiper_slide3}>

            <div className={s.container}>

                <div className={s.home__content__thee}>
                    

                    <p className={s.home__content_title}>
                    Детское меню
                    </p>

                    <p className={s.home__content_subtitle}>
                    Наше детское меню включает в себя разнообразные блюда, которые не только вкусные, но и питательные. Мы используем только свежие и натуральные ингредиенты, чтобы обеспечить вашего ребенка здоровой пищей
                    </p>

                     

                    <Link to={'/kidsmenu'} className={s.home__content_button}>
                    Подробнее 
                    </Link>

                </div>

            </div>

        </SwiperSlide>
        <SwiperSlide className={s.home__swiper_slide4}>
            
            <div className={s.container}>

                <div className={s.home__content__four}>
                    

                    <p className={s.home__content_titleThree}>
                    Доставим всё
                    </p>

                    <p className={s.home__content_textThree}>
                    для шашлыка и <br /> пикника
                    </p>

                    <Link to={'https://шашландия.рф/'} className={s.home__content_button}>
                    Подробнее 
                    </Link>

                </div>

            </div>

        </SwiperSlide>

        <SwiperSlide className={s.home__swiper_slide5}>
            
            <div className={s.container}>

                <div className={s.home__content__five}>
                    

                    <p className={s.home__content_titleThree}>
                     кейтеринг
                    </p>

                    <p className={s.home__content_textThree}>
                    доставка еды <br />
                    для вашего мероприятия
                    </p>

                    <button className={s.home__content_button}>
                    Подробнее 
                    </button>

                </div>

            </div>

        </SwiperSlide>

        <SwiperSlide className={s.home__swiper_slide6}>
            
            <div className={s.container}>

                <div className={s.home__content__six}>
                    

                    <p className={s.home__content_titleThree}>
                     корпоративное <br /> питание
                    </p>

                    <p className={s.home__content_textThree}>
                    доставка еды <br />
д                   для ваших сотрудников
                    </p>

                    <button className={s.home__content_button}>
                    Подробнее 
                    </button>

                </div>

            </div>

        </SwiperSlide>
        
    </Swiper>


    <ContentLogo Title='Рекомендуем' />

    <section className={s.section__mycard}>
         <div className={h.container}>
            
            <div className={s.mycard}>

               {CardInfo.map( (info , index) => {
                return <Card {...info} key={index} />
               } )}
                
            </div>

         </div>
    </section>


    <Filter />

    <section className={s.section__mycard}>
         <div className={h.container}>
            
            <div className={s.mycard}>

               {CardInfo.map( (info , index) => {
                return <Card {...info} key={index} />
               } )}
                
            </div>

         </div>
    </section>

<ContentLogo Title='Акции' />

<section className={s.section__mycard}>
     <div className={h.container}>
        
        <div className={s.mycard}>

           {CardInfo.map( (info , index) => {
            return <Card {...info} key={index} />
           } )}
            
        </div>

     </div>
</section>



<ContentLogo Title='Варианты оплаты' />

<Payment />

<ContentLogo Title='Доставка' />

<Delivery />

<ContentLogo Title='Отзывы' />

<Reviews />



        
        </>
        



    )
}