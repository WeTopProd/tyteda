
import o from './Oplata.module.scss'
import h from '../Header/Header.module.scss'

import carta from './image/oplataBK.jpg'
import visa from './image/visa.jpg'


export default function OplataPrav () {
    return (

        <>
        
        <section className={o.section__oplata}>

            <div className={h.container}>
                
                <p className={o.oplata__title}>
                Правила оплаты
                </p>

                <div className={o.oplata}>
                    
            <div className={o.oplata__item}>

                <p className={o.oplata__text}>
                К оплате принимаются платежные карты: VISA Inc, MasterCard WorldWide, МИР. 
                </p> 

                <p className={o.oplata__text}>
                Для оплаты товара банковской картой при оформлении заказа в интернет-магазине выберите способ
                оплаты: банковской картой.
                </p> 

                <p className={o.oplata__text}>
                При оплате заказа банковской картой, обработка платежа происходит на авторизационной странице
                банка, где Вам необходимо ввести данные Вашей банковской карты:
                </p> 

                <p className={o.oplata__text}>
                1. Тип карты;
                </p> 

                <p className={o.oplata__text}>
                2. Номер карты;
                </p> 

                <p className={o.oplata__text}>
                3. Срок действия карты (указан на лицевой стороне карты);
                </p> 

                <p className={o.oplata__text}>
                4. Имя держателя карты (латинскими буквами, точно также как указано на карте);
                </p>

                <p className={o.oplata__text}>
                5. CVC2/CVV2 код.
                </p>

                <img src={carta} alt="svg" className={o.oplata__img} />

                <p className={o.oplata__text}>
                Если Ваша карта подключена к услуге 3D-Secure, Вы будете автоматически переадресованы на страницу банка, выпустившего карту, для прохождения процедуры аутентификации. Информацию о правилах и методах дополнительной идентификации уточняйте в Банке, выдавшем Вам банковскую
                карту.
                </p>

                <p className={o.oplata__text} >
                Безопасность обработки интернет-платежей через платежный шлюз банка гарантирована
                международным сертификатом безопасности PCI DSS. Передача информации происходит с
                применением технологии шифрования SSL. Эта информация недоступна посторонним лицам. 
                </p>

            </div>

            <div className={o.oplata__item}>

                <p className={o.oplata__subtitle}>
                Советы и рекомендации по необходимым мерам безопасности проведения платежей с
использованием банковской карты:
                </p>

                <p className={o.oplata__text}>
                1. <span>Берегите свои пластиковые карты</span> так же, как бережете наличные деньги. Не забывайте их в
машине, ресторане, магазине и т.д.
                </p> 

                <p className={o.oplata__text}>
                2. Никогда <span>не передавайте полный номер своей кредитной карты</span> по телефону каким-либо лицам
или компаниям 
                </p> 

                <p className={o.oplata__text}>
                3. Всегда имейте под рукой номер телефона для экстренной связи с банком, выпустившим вашу карту,
и в случае ее утраты немедленно свяжитесь с банком
                </p> 

                <p className={o.oplata__text}>
                4. Вводите реквизиты карты только при совершении покупки. Никогда не указывайте их по каким-то
другим причинам.
                </p> 

                <img src={visa} className={o.oplata__img} alt="" />

            </div>

                </div>

            </div>
        </section>
        
        </>
        

    )

}