
import o from './Oplata.module.scss'
import h from '../Header/Header.module.scss'


export default function OplataInfo () {
    return (

        <>
        
        <section className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                    Оплата
                </p>

                <div className={o.oplata}>
                    
            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                    1. Выбираем услуги 
                </p>

                <p className={o.oplata__text}>
                1. На странице сайта выберите раздел который наиболее вам подходит, соискателям или работодателями;  
                </p> 

                <p className={o.oplata__text}>
                2. Для Вас откроется страница, где представлены услуги «Работодателям» и «Соискателям»; 
                </p> 

                <p className={o.oplata__text}>
                3. Выберите интересующую услугу;
                </p> 

                <p className={o.oplata__text}>
                4. Далее откроется страница с указанием цен и описанием наиболее важных характеристик услуг; 
                </p> 

                <p className={o.oplata__text}>
                5. Чтобы выбрать нужную вам услугу в нажмите кнопку «Выбрать».
                </p> 


            </div>

            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                 2. Оформляем заказ 
                </p>

                <p className={o.oplata__text}>
                1. Для оформления услуги Вам необходимо нажать на кнопку «Выбрать»;
                </p> 

                <p className={o.oplata__text}>
                2. После нажатия кнопки «Выбрать», у Вас автоматически откроется страница платёжной системы. На ней необходимо ввести необходимую платёжную информацию; 
                </p> 

                <p className={o.oplata__text}>
                3. После нажатия кнопки «Оплатить», Вы будете перенаправлены на страницу банка для оплаты; 
                </p> 

                <p className={o.oplata__text}>
                4. После оплаты Вам будет выслан чек на указанную электронную почту;
                </p> 

                <p className={o.oplata__text}>
                5. После получения оплаты наш консультант свяжется с Вами по указанным контактным данным и подберёт для Вас наиболее удобную дату и время консультации.
                </p> 


            </div>

                </div>

            </div>
        </section>
        
        </>
        

    )

}