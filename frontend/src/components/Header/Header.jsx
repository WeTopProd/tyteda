
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

import del  from './img/del.svg'
import FotoKar  from './img/karFoto.svg'
import X  from './img/Vector.svg'
import plus  from './img/plus.svg'
import location from './img/location.svg'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios'
import { useFavoritesContext } from '../../FavoritesContext'

export default function Header ({isActive, setIsActive, token}) {



    const [header , setHeader] = useState(false)

    const [adminka , setAdminka] = useState(false)

    const [karzinka , setkarzinka] = useState(false)

    const [danniy , setDanniy] = useState(false)

    const [danniyTwo , setDanniyTwo] = useState(false)

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
        
        setDanniyTwo(false)
    }

    const adminkaActive = () => {
        setAdminka(!adminka)
        setkarzinka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
        setDanniyTwo(false)
        setLovaOn(false)

    }

      const handleKarzinka = () => {
        setkarzinka(!karzinka)
        setAdminka(false)
        setDanniy(false)
        setChanges(false)
        setAddress(false)
        setZakaz(false)
        setDanniyTwo(false)
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
        setDanniyTwo(false)
      }

      const handleDanniy = () => {
        setAdminka(false)
        setDanniyTwo(true)
      }

      const handleDanniyPath = () => {
        setDanniyTwo(false)
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
        setDanniyTwo(false)
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
          setDanniyTwo(false)

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

      const signOut = () => {
        setIsActive(false);
        setAdminka(false);
        localStorage.setItem('isAuthorized', 'false');
        localStorage.setItem('token', '') // Сохраняем состояние в localStorage
    
      };

      const [meuser, setMeUser] = useState([])
  
      
  
      useEffect(() => {
          axios.get('http://127.0.0.1:8000/api/users/me/', {
  
          
          headers: {
              'Content-Type': 'application/json',
              'authorization': `Token ${tokenTwo}`
          }
      
          })
      
          .then((res) => { setMeUser(res.data) })
          .catch((err) => console.error(err))

      }, [])

      const [phoneTel, setPhoneTel] = useState('')

      const [firstName, setFirstName] = useState('')

      const [lastName, setLastName] = useState('')

      const [emailPo, setEmailPo] = useState('')


      const PreapUsers = () => {       
    
        axios.patch('http://127.0.0.1:8000/api/users/me/', {

        email: emailPo,
        first_name: firstName,
        last_name: lastName,
        phone: phoneTel,
            
        },
        
        {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Token ${tokenTwo}`
            }  

        }
        
        
        )

        .then(res => {   
            window.location.reload()
            setDanniyTwo(true)
            // setDanniy(false)
            
        })

        .catch(err => console.error(err))

      }

      const [tovarlive, setTovarLove] = useState([])

       useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {

        headers: {
          "content-type": "application/json",
          authorization: `Token ${tokenTwo}`,
        }
  
      })

      .then((res) => {

        setTovarLove(res.data.results)

       })

       }, [])

      const tokenTwo = localStorage.getItem('token')

      const { favorites } = useFavoritesContext();


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
    
                
                <HashLink to='/#footer' scroll={scrollWithOffset} onClick={burgerClose} className={h.nav__links_link}
                >
                    Контакты
                    
                </HashLink>
    
    
               </div>
    
               { !isActive ?

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
                
                <Link to={'/tovar'}  onClick={handleLove}  className={ h.nav__admin_box} >
                    <img src={love} alt="svg" />
                </Link>

                 
    
                <Link to={'/basket'}
                onClick={handleKarzinka}
                className={!karzinka ? h.nav__admin_box : h.nav__admin_box__active }
                
                >
                    <img src={karzina} alt="svg" />
                </Link>
    
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
    
            <div className={h.nav__user__nav} onClick={signOut}>
                <img src={admin4} alt="" />
                <p>Выйти</p>
            </div>           
    
        </div>

        <div className= { danniyTwo ? [h.nav__danniyTwo , h.nav__danniyTwo__active].join(' ') : [h.nav__danniyTwo] }>
            
            <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin1} alt="" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Мои данные
                    </p>
    
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
            </div>

            <div className={h.nav__danniyTwo__info}>
                
                <p className={h.nav__danniyTwo__info__text}>
                    Имя: {meuser.first_name}
                </p>

                <p className={h.nav__danniyTwo__info__text}>
                    фамилия: {meuser.last_name}
                </p>


                <p className={h.nav__danniyTwo__info__text}>
                    Телефон: {meuser.phone}
                </p>

                <p className={h.nav__danniyTwo__info__text}>
                    Почта: {meuser.email}
                </p>

                <button onClick={handleDanniyPath} className={h.nav__danniy__btn}>
                    Изменить
                </button>

            </div>
    
        </div>
    
        <div className= { danniy ? [h.nav__danniy , h.nav__danniy__active].join(' ') : [h.nav__danniy] }>
            
            <div className={h.nav__danniy__header}>
                
                <div className={h.nav__danniy__header__info}>
    
                    <img src={admin1} alt="" />
    
                    <p className={h.nav__danniy__header__info__title}>
                    Изменения данных
                    </p>
    
                    
                </div>
    
                <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />
    
            </div>
    
    
            <form className={h.nav__danniy__form} onSubmit={PreapUsers}>
                
                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Имя
                    </p>
    
                    <input type="text" className={h.nav__danniy__form__label__input}
                    placeholder='Иван'

                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}

                    />
    
                </label>


                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Фамилия
                    </p>
    
                    <input type="text" className={h.nav__danniy__form__label__input}
                    placeholder='Иванов'

                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}

                    />
    
                </label>
    
                <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Телефон
                    </p>
    
                    <input type="tel" className={h.nav__danniy__form__label__input}
                    placeholder='+7 (999) 123-45-67'

                    value={phoneTel}
                    onChange={(event) => setPhoneTel(event.target.value)}
                    
                    />
    
                </label>
    
                {/* <label className={h.nav__danniy__form__label}>
                    
                    <p className={h.nav__danniy__form__label__text}>
                    Почта
                    </p>
    
                    <input type="text" className={h.nav__danniy__form__label__input}
                    placeholder='ivanov.ivan@mail.ru'

                    value={emailPo}
                    onChange={(event) => setEmailPo(event.target.value)}
                    
                    />
    
                </label> */}
    
            </form>
    
            <button onClick={PreapUsers} className={h.nav__danniy__btn}>
            Изменить
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