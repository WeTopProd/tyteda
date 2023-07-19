
import { Link, useLocation } from 'react-router-dom'
import h from './Header.module.scss'

import logo from './img/header__logo.svg'
import poisk  from './img/nav__poisk.svg'

import love  from './img/love.svg'
import karzina  from './img/karzina.svg'
import admin  from './img/admin.svg'
import { useEffect, useState } from 'react'

import admin1  from './img/admin1.svg'
import admin2  from './img/admin2.svg'
import admin3  from './img/admin3.svg'
import admin4  from './img/admin4.svg'

import kar  from './img/kar.svg'
import del  from './img/del.svg'
import FotoKar  from './img/karFoto.svg'
import X  from './img/Vector.svg'
import plus  from './img/plus.svg'
import location from './img/location.svg'
import { HashLink } from 'react-router-hash-link';
import Tovar from '../Tovar/Tovar'
import { TovarJson } from '../Tovar/TovarJson'
import TovarKarzinka from '../Tovar/TovarKarzinka'

export default function Header ({isActive}) {



    const [header , setHeader] = useState(false)

    const [adminka , setAdminka] = useState(false)

    const [karzinka , setkarzinka] = useState(false)

    const [danniy , setDanniy] = useState(false)

    const [address, setAddress] = useState(false)

    const [changes, setChanges] = useState(false)

    const [ zakaz, setZakaz ] = useState(false)

    const [ loveOn, setLovaOn ] = useState(false)



    const burgerActive = () => {
        setHeader(!header)
    }

    const burgerClose = () => {
        setHeader(false)
        setAdminka(false)
        setkarzinka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
        setLovaOn(false)
    }

    const adminkaActive = () => {
        setAdminka(!adminka)
        setkarzinka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
        setLovaOn(false)

    }

      const handleKarzinka = () => {
        setkarzinka(!karzinka)
        setAdminka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
        setLovaOn(false)

      };

      //избранное

      const handleLove = () => {
        setLovaOn(!loveOn)
        setAdminka(false)
        setkarzinka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
      }

      const handleDanniy = () => {
        setAdminka(false)
        setDanniy(true)

      }

      const handleAddress = () => {
        setAdminka(false)
        setAddress(true)
      }

      const handleChanges = () => {
        setAddress(false)
        setChanges(true)
      }

      const handleZakaz = () => {
        setAdminka(false)
        setZakaz(true)
      }

      // кнопка закрыть
      const handleDanniyExit = () => {
        setDanniy(false)
        setAddress(false)
        setChanges(false)
        setZakaz(false)
        setAdminka(true)
      }



    const [HeaderScroll , setHeaderScroll] = useState (false)

    const changeBackground = () => {
       

        if (window.scrollY >= 800) {

            setHeaderScroll(true)

        } else {

            setHeaderScroll(false)

        }
    } 

    useEffect(() => {

        changeBackground()

        window.addEventListener("scroll", changeBackground)

      })

      const closeWindowsOnScroll = () => {
        
        if (window.scrollY >= 800) {
          setAdminka(false);
          setkarzinka(false);
          setDanniy(false)
          setZakaz(false)
          setLovaOn(false)

        }
      };
    
      useEffect(() => {

        changeBackground();
        
        window.addEventListener('scroll', changeBackground);
        window.addEventListener('scroll', closeWindowsOnScroll);   


        return () => {

          window.removeEventListener('scroll', changeBackground);
          
          window.removeEventListener('scroll', closeWindowsOnScroll);

        };

      }, []);

    let scrollWithOffset = (el) => {

        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;

        const yOffset = -150;

        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 

    }


      const locationn = useLocation ()
    

    return (

    <>
    
    {locationn.pathname === "/register" || locationn.pathname === "/login" ?
    
        ''
    
        :
    
        <>
    
        <header
        className={ HeaderScroll ? [h.header, h.header_active].join(' ') : [h.header] }
        >
            
            <div className={h.container}>
            
            <nav className={h.nav}>
    
                <Link to='/'>
    
               <img src={logo} alt="svg" className={h.nav__logo} />
    
                </Link>
                
    
        
    
                <form className={h.nav__form}>
                    <img src={poisk} alt="svg" className={h.nav__form_svg} />
                    <input type="text" className={h.nav__form_poisk} placeholder='Наименование блюда' />
                </form>
    
    
    
               <div className={h.nav__right}>
    
               <div className={ header ? [h.nav__links , h.nav__links_active].join(' ') : [h.nav__links] } >
                
                <Link to='/about' onClick={burgerClose} className={h.nav__links_link}>О нас</Link>
    
                <Link to='/combo' onClick={burgerClose} className={h.nav__links_link}>Комбо-обеды</Link>
    
                <Link to='/kidsmenu' onClick={burgerClose} className={h.nav__links_link}>детское меню</Link>
    
                {isActive ?
    
                   ''
                   
                :
    
                <Link to='/basket' onClick={burgerClose} className={h.nav__links_link}>Корзина</Link>
                
                }
    
                
                <HashLink to='/#footer' scroll={scrollWithOffset} onClick={burgerClose} className={h.nav__links_link}
                >
                    Контакты
                    
                </HashLink>
    
    
               </div>
    
               { isActive ?

               <>
               
               <div className={h.nav__admin}>
    
                   <Link to={'/register'} className={h.nav__admin__login}> Регистрация </Link>
    
               </div>

               <div onClick={burgerActive} className={ header ? [h.burger , h.burger_active_burger].join(' ') : [h.burger] }>
                    <span></span>
                </div>


               </>
    
               :
    
               <div className={h.nav__admin}>
                
                <div  onClick={handleLove}  className={ h.nav__admin_box} >
                    <img src={love} alt="svg" />
                </div>

                 
    
                <div
                onClick={handleKarzinka}
                className={!karzinka ? h.nav__admin_box : h.nav__admin_box__active }
                
                >
                    <img src={karzina} alt="svg" />
                </div>
    
                <div onClick={adminkaActive}
                 className={!adminka ? h.nav__admin_box : h.nav__admin_box__active }
                 
                >
                    <img src={admin} alt="svg" />
                </div>
    
                <div onClick={burgerActive} className={ header ? [h.burger , h.burger_active_burger].join(' ') : [h.burger] }>
                    <span></span>
                </div>
    
               </div>
    
               }
    
    
               </div>
    
    
            </nav>
    
    
            </div>
            
        </header>
    
    <div >
    
        <div className={h.container}>
    
            <div className={h.user}>
    
        <div className={ adminka ? [h.nav__user , h.nav__user__active].join(' ') : [h.nav__user] }
    
        >
            
            <div className={h.nav__user__admin}>
                <p>Иван Иванов</p>
            </div>
    
            <div className={h.nav__user__nav} onClick={handleDanniy}>
                <img src={admin1} alt="" />
                <p>Мои данные</p>
            </div>
    
            <div className={h.nav__user__nav} onClick={handleAddress}>
                <img src={admin2} alt="" />
                <p>Мои адреса</p>
            </div>
    
            <div className={h.nav__user__nav}
            onClick={handleZakaz}
            >
                <img src={admin3} alt="" />
                <p>Мои заказы</p>
            </div>
    
            <div className={h.nav__user__nav}>
                <img src={admin4} alt="" />
                <p>Выйти</p>
            </div>           
    
        </div>
    
        <div className={ loveOn ? [h.nav__love , h.nav__love__active].join(' ') : [h.nav__love] }
        
        >
            
            <div className={h.nav__kar__header}>
    
                <div className={h.nav__kar__header__item}>
    
                    <p className={h.nav__kar__header__item__title}>
                    Избранное
                    </p>
                    
                </div>
    
                <img src={del} alt="delete" className={h.nav__kar__header__del} />
    
    
            </div>
    
            {/* вот тут нужно сделать map  */}
    
            <div className={h.nav__kar__map}>

            {TovarJson.map( (info , index) => {
                return <Tovar {...info} key={index} />
            } )}
    
            </div>
    
        </div>
    
        <div className={ karzinka ? [h.nav__kar , h.nav__kar__active].join(' ') : [h.nav__kar] }
        
        >
            
            <div className={h.nav__kar__header}>
    
                <div className={h.nav__kar__header__item}>
    
                    <img src={kar} alt="svg" />
    
                    <p className={h.nav__kar__header__item__title}>
                        Корзина
                    </p>
                    
                </div>
    
                <img src={del} alt="delete" className={h.nav__kar__header__del} />
    
            </div>
    
            {/* вот тут нужно сделать map  */}
    
            <div className={h.nav__kar__map}>

            {TovarJson.map( (info , index) => {
                return <TovarKarzinka {...info} key={index} />
            } )}
    
            </div>
    
    
            
    
            {/* //// */}
    
            <div className={h.nav__kar__center}>
                <p>Доставка</p>
    
                <p>0 руб.</p>
            </div>
    
            <div className={h.nav__kar__footer}>
                <p>Итого:</p>
    
                <p>1 920 руб.</p>
            </div>
    
            <button className={h.nav__kar__footer__btn}>
                Заказать
            </button>
    
        </div>
    
        <div className= { danniy ? [h.nav__danniy , h.nav__danniy__active].join(' ') : [h.nav__danniy] }>
            
            <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin1} alt="" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Мои данные
                    </p>
    
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
            </div>
    
    
            <form className={h.nav__danniy__form}>
                
                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Имя
                    </p>
    
                    <input type="text" className={h.nav__danniy__form__label__input}
                    placeholder='Иванов Иван'
                    />
    
                </label>
    
                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Телефон
                    </p>
    
                    <input type="number" className={h.nav__danniy__form__label__input}
                    placeholder='+7 (999) 123-45-67'
                    
                    />
    
                </label>
    
                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Почта
                    </p>
    
                    <input type="text" className={h.nav__danniy__form__label__input}
                    placeholder='ivanov.ivan@mail.ru'
                    
                    />
    
                </label>
    
            </form>
    
            <button className={h.nav__danniy__btn}>
            Сохранить
            </button>
    
        </div>
    
        <div className={ address ? [h.nav__address , h.nav__address__active].join(' ') : [h.nav__address] }>
    
        <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin2} alt="svg" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Мои адреса
                    </p>
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
        </div>
    
        <div className={h.nav__address__info}>
    
            <p className={h.nav__address__info__title}>
            ул. Реутовских Ополченцев, д.14, кв. 552
            </p>
    
            <img src={del} alt="svg" />
    
        </div>
    
        <div className={h.nav__address__footer} onClick={handleChanges}>
    
            <img src={plus} alt="+" />
    
            <p className={h.nav__address__info__title}>
            Добавить новый адрес
            </p>
    
        </div>
    
        </div>
    
        <div className={ changes ? [h.nav__changes , h.nav__changes__active].join(' ') : [h.nav__changes] }>
            
        <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin2} alt="svg" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Мои адреса
                    </p>
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
        </div>
    
        <form className={h.nav__changes__form}>
    
            <input type="text" className={h.nav__changes__form__input}
            placeholder='Адрес'
            />
            
            <div className={h.nav__changes__form__flex}>
                
            <input type="number" className={h.nav__changes__form__input}
            placeholder='Этаж'
            />
    
            <input type="text" className={h.nav__changes__form__input}
            placeholder='Домофон'
            />
    
            </div>
    
            <input type="text" className={h.nav__changes__form__input}
            placeholder='Комментарий'
            />
            
        </form>
    
        <button className={h.nav__danniy__btn}>
        Сохранить изменения
        </button>
    
        </div>
    
        <div className={ zakaz ? [h.nav__zakaz , h.nav__zakaz__active].join(' ') : [h.nav__zakaz] }>
            
        <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin3} alt="svg" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Мои заказы
                    </p>
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
        </div>
    
        <div className={h.nav__zakaz__item}>
            
            <div className={h.nav__zakaz__item__header}>
                
                <p className={h.nav__zakaz__item__header__data}>
                20.04.2023
                </p> 
    
                <Link to='' className={h.nav__zakaz__item__header__location}>
                    <img src={location} alt="img" />
                    Отследить заказ
                </Link>
    
                <p className={h.nav__zakaz__item__header__sum}>
                4 290 руб.
                </p>
    
            </div>
    
    
            <div className={h.nav__zakaz__item__tovar}>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
        <div className={h.nav__zakaz__item}>
            
            <div className={h.nav__zakaz__item__header}>
                
                <p className={h.nav__zakaz__item__header__data}>
                20.04.2023
                </p> 
    
                <Link to='' className={h.nav__zakaz__item__header__location}>
                    <img src={location} alt="img" />
                    Отследить заказ
                </Link>
    
                <p className={h.nav__zakaz__item__header__sum}>
                4 290 руб.
                </p>
    
            </div>
    
    
            <div className={h.nav__zakaz__item__tovar}>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
                <div className={h.nav__zakaz__item__tovar__item}>
                    
                    <img src={FotoKar} className={h.nav__zakaz__item__tovar__item__img} alt="img" />
    
                    <div>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        Пицца мясной пир
                        </p>
    
                        <p className={h.nav__zakaz__item__tovar__item__text}>
                        490 руб.
                        </p>
    
                    </div>
    
                </div>
    
            </div>
    
        </div>        
    
    
        </div>
    
    
            </div>
    
        </div>
    
    </div>
    
        
        </>
    
    }
    
    </>

        


    )
}