
import b from './Basket.module.scss'
import h from '../../components/Header/Header.module.scss'
import i from '../InterCard/interCard.module.scss'
import s from '../Home.module.scss'  

import { useState } from 'react'
import { TovarJson } from '../../components/Tovar/TovarJson'
import BasketTovar from './BasketTovar'
import ContentLogo from '../../components/Content/ContentLogo'
import CardInfo from '../../components/Content/CardInfo'
import Card from '../../components/Content/Card'


export default function Basket () {

    
    const [oplata, seetOplata] = useState(false)
    
    const handleOplata = () => {
        seetOplata(false)
    }

    const handleSelectChange = (event) => {
        // Получаем выбранное значение из события onChange
        const selectedOption = event.target.value;
    
        // Проверяем, если выбрана опция, устанавливаем состояние на true
        if (selectedOption) {
            seetOplata(true);
        }
      };

    return (
        
        <>
        <section className={b.section__basket}>
            <div className={h.container}>
                
                <form className={b.basket}>
                    
                    <div className={b.basket__item}>
                        
                        <p className={b.basket__item__title}>
                        Личные данные
                        </p>

                        <div className={b.basket__item__form}>
                            
                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                ФИ
                                </p>

                                <input type="text" placeholder='Иванов Иван' className={b.basket__item__form__label__inp} />

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Почта
                                </p>

                                <input type="text" placeholder='ivanov.ivan@mal.ru' className={b.basket__item__form__label__inp} />

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Адрес
                                </p>

                                <input type="text" placeholder='Реутовских Ополченцев д 14, кв. 551' className={b.basket__item__form__label__inp} />

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Условия доставки
                                </p>

                                <p type="text" className={b.basket__item__form__label__inp}>100 руб</p>

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Время доставки
                                </p>

                                <select className={b.basket__item__form__label__select}>
                                    <option value="">Выберете</option>
                                    <option value="">Сегодня</option>
                                    <option value="">Завтра</option>
                                </select>

                            </label>


                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                
                                </p>

                                <input type="time" id="appt" name="appt"
                                     required className={b.basket__item__form__label__time} />

                            </label>

                            <label className={b.basket__item__form__labelTwo}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Способ оплаты
                                </p>

                                <div className={b.basket__item__form__labelTwo__fl}>

                            <select onChange={handleSelectChange} type="text" className={b.basket__item__form__label__selectTwo}>

                                <option value="">Выберете опцию</option>
                                <option value="Добавить новую карту">Добавить новую карту</option>
                                <option value="">Оплата картой курьеру</option>
                                <option value="">Оплата наличными курьеру</option>
                                
                            </select>

                                </div>

                            </label>

                        {oplata  &&
                            
                            <label className={b.basket__item__form__labelTwo}>
                                
                                <p className={b.basket__item__form__label__text}>
                                
                                </p>

                                <input type="text"
                                className={b.basket__item__form__label__inp}
                                placeholder='Введите номер карты'  
                                />

                                <div className={b.basket__item__form__label__flex}>

                                <input type="number"
                                className={b.basket__item__form__label__flex__inp}
                                placeholder='ММ/ГГ'  
                                />

                                <input type="password"
                                className={b.basket__item__form__label__flex__inp}
                                placeholder='CVV'  
                                />

                                </div>

                                <button onClick={handleOplata} className={b.basket__item__form__label__btn}>
                                привязать карту
                                </button>

                            </label>
                        
                        }

                            
                        </div>

                    </div>

                    <div className={b.basket__item}>
                        

                        <p className={b.basket__item__title}>
                        Ваш заказ
                        </p>

                    <div className={b.basket__item__formTwo}>

                <div className={b.basket__item__map}>

                            {TovarJson.map( (info , index) => {
                                return <BasketTovar {...info} key={index} />
                            } )}

                        </div>

                    <div className={b.basket__item__pribor}>
                        
                        <p className={b.basket__item__pribor__title}>
                        Приборы
                        </p>

                        <div className={h.nav__kar__item__fun}>

                           <div className={h.nav__kar__item__fun__add}>
                                -
                           </div>

                           <h3>1</h3>

                           <div className={h.nav__kar__item__fun__add}>
                             +
                           </div>

                        </div>

                    </div>

                    <div className={b.basket__item__priborTwo}>
                        
                        <p className={b.basket__item__pribor__title}>
                        Доставка
                        </p>

                        <p className={b.basket__item__pribor__title}>
                        100 руб.
                        </p>     

                    </div>

                    <div className={b.basket__item__footer}>
                        
                        <p className={b.basket__item__footer__price}>
                            1920 руб.
                        </p>

                        <button className={b.basket__item__footer__button}>
                        Заказать
                        </button>

                    </div>

                    </div>


                    </div>

                </form>

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