
import b from './Basket.module.scss'
import h from '../../components/Header/Header.module.scss'
import i from '../InterCard/interCard.module.scss'
import s from '../Home.module.scss'  

import { useEffect, useState } from 'react'
import BasketTovar from './BasketTovar'
import ContentLogo from '../../components/Content/ContentLogo'
import Card from '../../components/Content/Card'
import axios from 'axios'


export default function Basket ({

    isAddedToCart,

    setIsAddedToCart,

    karzinkaTovar,
    
    setkarzinkaTovar,

    addBasket,

    Goods,

    totalCartPrice, setTotalCartPrice 

}) {

  
    useEffect(() => {
      axios
        .get('http://127.0.0.1:8000/api/goods/?is_in_shopping_cart=true', {
          headers: {
            'Content-Type': 'application/json',
            authorization: `Token ${localStorage.getItem('token')}`,
          },
        })
        .then((res) => {
          if (Array.isArray(res.data.results)) {
            setkarzinkaTovar(res.data.results);
          }
        })
        .catch((err) => console.error(err));
    }, []);
  
    async function removeBasket(id) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/goods/${id}/shopping_cart/`, {
          headers: {
            'content-type': 'application/json',
            authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        setkarzinkaTovar((prevKarzinkaTovar) =>
          prevKarzinkaTovar.filter((item) => item.id !== id)
        );
      } catch (err) {
        console.error(err);
      }
    }
  
    const [instrumentation, setInstrumentation] = useState(1);

    const [delivery_amount, setdelivery_amount] = useState(200);

    const [countInfo, setCountInfo] = useState([]);
  
    const increaseCount = () => {
      setInstrumentation(instrumentation + 1);
    };
  
    const decreaseCount = () => {
      if (instrumentation > 0) {
        setInstrumentation(instrumentation - 1);
      }
    };

    // Функция для рассчета общей цены корзины
    const calculateTotalCartPrice = () => {
      const totalKarzinkaPrice = karzinkaTovar.reduce((total, item) => total + item.price * item.count, 0);
      const totalCountInfoPrice = countInfo.reduce((total, item) => total + item.count * item.goods.price, 0);
      const dostavka = delivery_amount 
      return totalKarzinkaPrice + totalCountInfoPrice + dostavka;
    };

    useEffect(() => {
      setTotalCartPrice(calculateTotalCartPrice());
    }, [karzinkaTovar, countInfo, setTotalCartPrice]);


    const [name, setName] = useState('')

    const [mail, setMail] = useState('')

    const [adress, setAdress] = useState('')

    const [delTime, setDelTime] = useState('')

    const [delTimeSum, setDelTimeSum] = useState('')

    const [oplata, setOplata] = useState('')

    const deliveryTime = delTime + " " + delTimeSum;

    const OplataTotalSum = (e) => {

      e.preventDefault()

      axios.post(`http://127.0.0.1:8000/api/goods/create_order/`,
      
      {
          total_price: totalCartPrice,  
          cutlery: instrumentation,
          delivery_cost: delivery_amount ,
          fio: name,
          email: mail,
          address: adress ,
          delivery_time: deliveryTime  ,
          payment_method: oplata
      },
      
      {
          headers : {
            'Content-Type': 'application/json',
            authorization: `Token ${localStorage.getItem('token')}`,
          }
          
      }
      
      )

      .then(res => {
        window.location.reload()
      } )

      .catch(err => {
  
          console.error(err)
      
      } )

  }


  

    return (
        
        <>
        <section className={b.section__basket}>
            <div className={h.container}>
                
                <form className={b.basket} onSubmit={OplataTotalSum}>
                    
                    <div className={b.basket__item}>
                        
                        <p className={b.basket__item__title}>
                        Личные данные
                        </p>

                        <div className={b.basket__item__form}>
                            
                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Ф.И
                                </p>

                                <input type="text" placeholder='Иванов Иван' className={b.basket__item__form__label__inp}
                                
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                
                                />

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Почта
                                </p>

                                <input type="text" placeholder='ivanov.ivan@mal.ru' className={b.basket__item__form__label__inp}
                                
                                value={mail}
                                onChange={(event) => setMail(event.target.value)}
                                
                                />

                            </label>

                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Адрес
                                </p>

                                <input type="text" placeholder='Реутовских Ополченцев д 14, кв. 551' className={b.basket__item__form__label__inp}
                                
                                value={adress}
                                onChange={(event) => setAdress(event.target.value)}

                                />

                            </label>


                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Время доставки
                                </p>

                                <select className={b.basket__item__form__label__select}
                                
                                value={delTime}
                                onChange={(event) => setDelTime(event.target.value)}
                                
                                >
                                    <option value="">Выберете</option>
                                    <option value="Сегодня">Сегодня</option>
                                    <option value="Завтра">Завтра</option>
                                </select>

                            </label>


                            <label className={b.basket__item__form__label}>
                                
                                <p className={b.basket__item__form__label__text}>
                                
                                </p>

                                <input type="time"


                                    className={b.basket__item__form__label__time}
                                     
                                     value={delTimeSum}
                                     onChange={(event) => setDelTimeSum(event.target.value)}
                                     
                                     />

                            </label>

                            <label className={b.basket__item__form__labelTwo}>
                                
                                <p className={b.basket__item__form__label__text}>
                                Способ оплаты
                                </p>

                                <div className={b.basket__item__form__labelTwo__fl}>

                            <select type="text" className={b.basket__item__form__label__selectTwo}
                            
                            value={oplata}
                            onChange={(event) => setOplata(event.target.value)}
                            
                            >

                                <option value="">Выберете опцию</option>
                                <option value="Оптала онлайн">Оптала онлайн</option>
                                <option value="Оплата картой курьеру">Оплата картой курьеру</option>
                                <option value="Оплата наличными курьеру">Оплата наличными курьеру</option>
                                
                            </select>

                                </div>

                            </label>

                            
                        </div>

                    </div>

                    <div className={b.basket__item}>
                        

                        <p className={b.basket__item__title}>
                        Ваш заказ
                        </p>

                    <div className={b.basket__item__formTwo}>

                <div className={b.basket__item__map}>

                            {karzinkaTovar.length === 0 ? (

                            <p className={b.basket__item__map__text}>Пока что нет выбранных товаров.</p>

                            ) : (

                                karzinkaTovar.map((info, index) => {
                                    return (
                                        <BasketTovar
                                            countInfo={countInfo}
                                            setCountInfo={setCountInfo}
                                            {...info}
                                            setkarzinkaTovar={setkarzinkaTovar}
                                            removeBasket={removeBasket}
                                            karzinkaTovar={karzinkaTovar}
                                            setTotalCartPrice={setTotalCartPrice}
                                            key={index}
                                        />
                                    );
                                })                                

                            )}

                        </div>

                    <div className={b.basket__item__pribor}>
                        
                        <p className={b.basket__item__pribor__title}>
                        Приборы
                        </p>

                        <div className={h.nav__kar__item__fun}>

                           <div className={h.nav__kar__item__fun__add} onClick={decreaseCount}>
                                -
                           </div>

                           <h3>{instrumentation}</h3>

                           <div className={h.nav__kar__item__fun__add} onClick={increaseCount}>
                             +
                           </div>

                        </div>

                    </div>

                    <div className={b.basket__item__priborTwo}>
                        
                        <p className={b.basket__item__pribor__title}>
                        Доставка
                        </p>

                        <p className={b.basket__item__pribor__title}>
                        {delivery_amount} руб.
                        </p>     

                    </div>

                    <div className={b.basket__item__footer}>
                        
                        <p className={b.basket__item__footer__price}>
                            {totalCartPrice} руб.
                        </p>

                        <button className={b.basket__item__footer__button} onClick={OplataTotalSum}>
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

               {Goods.map( (info , index) => {

                return <Card addBasket={addBasket}  isAddedToCart={karzinkaTovar.some((item) => item.id === info.id)}
                {...info} key={index} />
                
               } )}
                
            </div>

         </div>
    </section>
        
        </>

    )
}
