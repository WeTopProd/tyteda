
import { Link, useLocation } from 'react-router-dom'
import h from './Header.module.scss'

import logo from './img/header__logo.svg'
import poisk from './img/nav__poisk.svg'

import love from './img/love.svg'
import karzina from './img/karzina.svg'
import admin from './img/admin.svg'
import { useEffect, useState } from 'react'


import admin1 from './img/admin1.svg'
import admin2 from './img/admin2.svg'
import admin3 from './img/admin3.svg'
import admin4 from './img/admin4.svg'

import del from './img/del.svg'
import FotoKar from './img/karFoto.svg'
import X from './img/Vector.svg'
import plus from './img/plus.svg'
import location from './img/location.svg'
import { HashLink } from 'react-router-hash-link';
import axios from 'axios'
import { useFavoritesContext } from '../../FavoritesContext'
import HeaderCard from '../HeaderCard'
import MyZakazItem from '../MyzakazItem'
import { ChevronDownCircle } from 'lucide-react';
import Select from 'react-select';
import './Select.moduls.scss'; //


export default function Header({ isActive, setIsActive, token, handlePoiskCard, address, setAddress }) {



    const [header, setHeader] = useState(false)

    const [adminka, setAdminka] = useState(false)

    const [karzinka, setkarzinka] = useState(false)

    const [danniy, setDanniy] = useState(false)

    const [danniyTwo, setDanniyTwo] = useState(false)


    const [changes, setChanges] = useState(false)

    const [zakaz, setZakaz] = useState(false)

    const [loveOn, setLovaOn] = useState(false)



    const burgerActive = () => {
        setHeader(!header)
    }

    const burgerClose = () => {
        setHeader(false)


        setDanniyTwo(false)
    }

    const adminkaActive = () => {
        setAdminka(!adminka)


    }

    const handleKarzinka = () => {
        setkarzinka(prev => !prev)

    };


    //избранное

    const handleLove = () => {
        setLovaOn(!loveOn)


    }

    const handleDanniy = () => {
        setAdminka(false)
        setDanniyTwo(true)
    }

    const handleDanniyPath = () => {
        setDanniyTwo(false)
        setDanniy(true)

    }


    const handleChanges = () => {
        setChanges(true)
    }

    const handleZakaz = () => {
        setAdminka(false)
        setZakaz(true)
    }

    const [togglerPersonalInfo, setTogglerPersonalInfo] = useState(false)
    // кнопка закрыть
    const handleDanniyExit = () => {
        setDanniy(false)
        setChanges(false)
        setZakaz(false)
        setAdminka(true)
        setDanniyTwo(false)
        setTogglerPersonalInfo(false)
    }



    const [HeaderScroll, setHeaderScroll] = useState(false)

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

    const locationn = useLocation()

    const signOut = () => {
        setIsActive(false);
        setAdminka(false);
        localStorage.setItem('isAuthorized', 'false');
        localStorage.setItem('token', '') // Сохраняем состояние в localStorage

    };

    const [meuser, setMeUser] = useState([])



    useEffect(() => {
        // Проверяем наличие токена
        if (tokenTwo) {
            axios.get('https://tyteda.ru/api/users/me/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${tokenTwo}`
                }
            })
                .then((res) => {
                    setMeUser(res.data);
                })
                .catch((error) => {
                    // Обработка ошибки авторизации
                    console.error("Ошибка при выполнении GET-запроса:", error);
                });
        } else {
            // Действия, если нет токена
            console.log("Пользователь не авторизован");
        }
    }, []);

    const [phoneTel, setPhoneTel] = useState('')

    const [firstName, setFirstName] = useState('')

    const [lastName, setLastName] = useState('')

    const [emailPo, setEmailPo] = useState('')


    const PreapUsers = () => {


        axios.patch('https://tyteda.ru/api/users/me/', {

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

    }

    const tokenTwo = localStorage.getItem('token')

    const { favorites } = useFavoritesContext();


    const [HeaderTovar, setHeaderTovar] = useState([])

    const [titleItem, setTitleItem] = useState('')


    const PoiskItem = (event) => {

        const inputValue = event.target.value;

        setTitleItem(inputValue);

        if (inputValue.length === 0) {
            setShowInfo(false);

        } else {
            setShowInfo(true);
        }

        event.preventDefault()

        axios.get(`https://tyteda.ru/api/goods/?title=${titleItem}`, {

            // headers: {
            //     'Content-Type': 'application/json',
            //     authorization: `Token ${localStorage.getItem('token')}`,
            // },

        })

            .then(res => {
                setHeaderTovar(res.data.results)
            })

    }

    const [showInfo, setShowInfo] = useState(false);

    const [MyZakaz, setMyZakaz] = useState([])

    const [MyZakazCard, setMyZakazCard] = useState([])

    useEffect(() => {

        if (tokenTwo) {
            axios.get('https://tyteda.ru/api/goods/order_history/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${tokenTwo}`
                }
            })

                .then((res) => {

                    setMyZakaz(res.data);


                })
                .catch((error) => {

                    console.error("Ошибка при выполнении GET-запроса:", error);
                });
        } else {

            console.log("Пользователь не авторизован");
        }
    }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);

    const [isMobilee, setIsMobilee] = useState(window.innerWidth <= 567);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 930);
        };


        window.addEventListener('resize', handleResize);


        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setIsMobilee(window.innerWidth <= 567);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        // { label: 'Десерты', eng: 'dessert', action: () => handlehandler(options[0].label) } для себя,
        { label: 'Десерты', eng: 'dessert', action: () => handlePoiskCard(options[0].eng) },
        { label: 'Напитки', eng: 'drinks', action: () => handlePoiskCard(options[1].eng) },
        { label: 'Хачапури ', eng: 'khachapuri', action: () => handlePoiskCard(options[2].eng) },
        { label: 'Осетинские пироги ', eng: 'ossetian_pies', action: () => handlePoiskCard(options[3].eng) },
        { label: 'Блюда на мангале ', eng: 'dishes_grill', action: () => handlePoiskCard(options[4].eng) },
        { label: 'Роллы', eng: 'rolls', action: () => handlePoiskCard(options[5].eng) },
        { label: 'Пивные закуски', eng: 'beer_snacks', action: () => handlePoiskCard(options[6].eng) },
        { label: 'Хлеб', eng: 'bread', action: () => handlePoiskCard(options[7].eng) },
        { label: 'Вок', eng: 'wok', action: () => handlePoiskCard(options[8].eng) },
    ];

    // function handlehandler (label){
    //  const eng = options.map(el => el.label == label ? el.eng:null)
    //     handlePoiskCard(eng)
    // } для себя

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        option.action(); // Выполнение выбранной функции
        setIsOpen(false);
    };

    const handleCall = () => {
        window.location.href = '+74951396444';
    };

    const [deliveryAddress, setDeliveryAddress] = useState(null);





    // 

    const fetchDeliveryAddress = async () => {
        try {

            const response = await axios.get('https://tyteda.ru/api/users/me/', {
                headers: {
                    'Authorization': `Token ${tokenTwo}`
                }
            });
            // Получение адреса доставки из сервера
            const address = response.data.delivery_address;


        } catch (error) {
            console.error('Ошибка запроса', error);

        }
    };

    useEffect(() => {
        fetchDeliveryAddress()
    }, []);

    return (

        <>

            {locationn.pathname === "/register" || locationn.pathname === "/login" ?

                ''

                :

                <>

                    <header
                        className={HeaderScroll ? [h.header, h.header_active].join(' ') : [h.header]}
                    >

                        <div className={h.container}>

                            <nav className={h.nav}>

                                <Link to='/'>

                                    <img src={logo} alt="svg" className={h.nav__logo} />

                                </Link>
                                <div style={{ display: 'flex' }}>
                                    <svg className={h.sssvg} width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.42041 3.81944C5.11277 3.1718 5.93625 2.65769 6.84346 2.3067C7.75067 1.9557 8.72369 1.77476 9.70652 1.77428C11.6881 1.77428 13.5899 2.50903 14.9926 3.81944C16.3974 5.1334 17.1853 6.90999 17.1842 8.76137C17.1842 11.9584 15.2749 14.8523 13.2858 16.9889C12.4476 17.8849 11.5389 18.7218 10.5671 19.4928C10.0627 19.8945 9.35058 19.8942 8.84596 19.4928C7.87416 18.7218 6.9654 17.8849 6.1272 16.9889C4.13813 14.8523 2.22883 11.9584 2.22883 8.76137C2.22883 6.90713 3.01772 5.12984 4.42041 3.81944ZM9.34759 21.339C9.52794 21.1014 9.88509 21.1014 10.0654 21.339C9.96033 21.4075 9.83498 21.4443 9.70652 21.4443C9.57805 21.4443 9.45271 21.4075 9.34759 21.339ZM9.34759 21.339C9.52794 21.1014 9.88509 21.1014 10.0654 21.339L10.0679 21.3378L10.0742 21.3337L10.0929 21.3204L10.1664 21.2713C10.2287 21.2284 10.3197 21.166 10.4343 21.0838C10.6637 20.9207 10.9889 20.6806 11.3772 20.3722C12.3962 19.5635 13.3492 18.6855 14.228 17.7456C16.2894 15.5321 18.4305 12.3727 18.4305 8.76079C18.4305 6.60282 17.512 4.53163 15.8769 3.00427C15.0687 2.24833 14.1074 1.64826 13.0485 1.23859C11.9895 0.828916 10.8537 0.61773 9.70652 0.617188C8.55935 0.617655 7.4236 0.828749 6.36464 1.23832C5.30568 1.64789 4.34442 2.24786 3.53618 3.00369C1.89945 4.53454 0.981445 6.60437 0.982545 8.76137C0.982545 12.3727 3.12366 15.5321 5.18501 17.7456C6.06387 18.6855 7.01678 19.5635 8.03588 20.3722C8.42472 20.6806 8.74937 20.9207 8.97869 21.0838C9.09116 21.1643 9.20479 21.2434 9.31954 21.321L9.33949 21.3337L9.34287 21.3362C9.34435 21.3373 9.34593 21.3382 9.34759 21.339ZM7.21395 8.71682C7.21395 8.10306 7.47656 7.51444 7.94401 7.08045C8.41145 6.64646 9.04545 6.40264 9.70652 6.40264C10.3676 6.40264 11.0016 6.64646 11.469 7.08045C11.9365 7.51444 12.1991 8.10306 12.1991 8.71682C12.1991 9.33058 11.9365 9.9192 11.469 10.3532C11.0016 10.7872 10.3676 11.031 9.70652 11.031C9.04545 11.031 8.41145 10.7872 7.94401 10.3532C7.47656 9.9192 7.21395 9.33058 7.21395 8.71682ZM9.70652 5.24555C8.71491 5.24555 7.76392 5.61127 7.06275 6.26226C6.36158 6.91325 5.96767 7.79619 5.96767 8.71682C5.96767 9.63746 6.36158 10.5204 7.06275 11.1714C7.76392 11.8224 8.71491 12.1881 9.70652 12.1881C10.6981 12.1881 11.6491 11.8224 12.3503 11.1714C13.0514 10.5204 13.4454 9.63746 13.4454 8.71682C13.4454 7.79619 13.0514 6.91325 12.3503 6.26226C11.6491 5.61127 10.6981 5.24555 9.70652 5.24555Z" fill="#303030" />
                                    </svg>

                                    <input
                                        type='text'
                                        placeholder='Реутовских Ополченцев д 14, кв. 551'
                                        className={h.address__form__input}
                                        value={address} onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>

                                <form className={h.nav__form} onChange={PoiskItem}>



                                    <div className={h.address__form}>



                                        <img src={poisk} alt="svg" className={h.nav__form_svg} />
                                        <input
                                            type="text"
                                            className={h.nav__form_poisk}
                                            placeholder="Блюда"
                                            value={titleItem}
                                            onChange={(event) => setTitleItem(event.target.value)}
                                        // onBlur={() => setShowInfo(false)} 
                                        />
                                    </div>


                                    {showInfo && (

                                        <div className={h.nav__form__info}>

                                            <div className={h.basketTovar}>

                                                {HeaderTovar.length === 0 ? (

                                                    <p className={h.basketTovar__text}>Искать на TYTEDA</p>

                                                ) : (

                                                    HeaderTovar.map((info, index) => {
                                                        return (
                                                            <HeaderCard setShowInfo={setShowInfo} {...info} key={index} />
                                                        );
                                                    })

                                                )}

                                            </div>



                                        </div>

                                    )}

                                </form>





                                <div className={h.nav__right}>

                                    <div className={header ? [h.nav__links, h.nav__links_active].join(' ') : [h.nav__links]} >

                                        <Link to='/about' onClick={burgerClose} className={h.nav__links_link}>О нас</Link>

                                        <Link to='/combo' onClick={burgerClose} className={h.nav__links_link}>Комбо-обеды</Link>

                                        <Link to='/kidsmenu' onClick={burgerClose} className={h.nav__links_link}>Детское меню</Link>



                                        <HashLink to='/#footer' scroll={scrollWithOffset} onClick={burgerClose} className={h.nav__links_link}
                                        >
                                            Контакты

                                        </HashLink>


                                    </div>

                                    {!isActive ?

                                        <>

                                            <div className={h.nav__admin}>

                                                <Link to={'/register'} className={h.nav__admin__login}> Регистрация </Link>

                                            </div>

                                            <div onClick={burgerActive} className={header ? [h.burger, h.burger_active_burger].join(' ') : [h.burger]}>
                                                <span></span>
                                            </div>


                                        </>

                                        :

                                        <div className={h.nav__admin}>

                                            <Link to={'/tovar'} onClick={handleLove} className={h.nav__admin_box} >
                                                <img src={love} alt="svg" />
                                            </Link>



                                            <Link to={'/basket'}
                                                onClick={handleKarzinka}
                                                className={!karzinka ? h.nav__admin_box : h.nav__admin_box__active}

                                            >
                                                <img src={karzina} alt="svg" />
                                            </Link>

                                            <div onClick={adminkaActive}
                                                className={!adminka ? h.nav__admin_box : h.nav__admin_box__active}

                                            >
                                                <img src={admin} alt="svg" />
                                            </div>

                                            <div onClick={burgerActive} className={header ? [h.burger, h.burger_active_burger].join(' ') : [h.burger]}>
                                                <span></span>
                                            </div>

                                        </div>

                                    }


                                </div>


                            </nav>


                        </div>

                        <div className={isMobile ? 'h.nav__right' : 'h.bottomContainer'}>
                            {isMobile ? (
                                /* тут рендер телефона */
                                <div className="h.nav__right">
                                    <div className={h.nav__rightt}>

                                        <div className={h.mobail_menu} onClick={() => handlePoiskCard('')}>
                                            <p>Меню</p>
                                        </div>

                                        <div className={h.Box_mobail} >

                                            <Link to='/about' onClick={burgerClose} style={{ color: '#D9D9D9', fontSize: '18px', whiteSpace: 'nowrap' }} className={h.nav__links_link}>О нас</Link>

                                            <Link to='/combo' onClick={burgerClose} style={{ color: '#D9D9D9', fontSize: '18px', whiteSpace: 'nowrap' }} className={h.nav__links_link}>Комбо-обеды</Link>

                                            <Link to='/kidsmenu' onClick={burgerClose} style={{ color: '#D9D9D9', fontSize: '18px', whiteSpace: 'nowrap' }} className={h.nav__links_link}>Детское меню</Link>



                                            <HashLink to='/#footer' scroll={scrollWithOffset} style={{ color: '#D9D9D9', fontSize: '18px', whiteSpace: 'nowrap' }} onClick={burgerClose} className={h.nav__links_link}
                                            >
                                                Контакты

                                            </HashLink>


                                        </div>
                                        <div className={h.mobail_icon} >
                                            <form className={h.search} onChange={PoiskItem}>

                                                <img src={poisk} alt="svg" className={h.nav__form_svg} />
                                                <div>

                                                    <input
                                                        type="text"
                                                        className={h.nav__form_poisk}
                                                        placeholder=" Блюда"
                                                        value={titleItem}
                                                        onChange={(event) => setTitleItem(event.target.value)}
                                                    // onBlur={() => setShowInfo(false)} 
                                                    />
                                                </div>

                                                {showInfo && (

                                                    <div className={`${h.nav__form__info} nav_form_info`}>

                                                        <div className={h.basketTovar}>

                                                            {HeaderTovar.length === 0 ? (

                                                                <p className={h.basketTovar__text}>Искать на TYTEDA</p>

                                                            ) : (

                                                                HeaderTovar.map((info, index) => {
                                                                    return (
                                                                        <HeaderCard setShowInfo={setShowInfo} {...info} key={index} />
                                                                    );
                                                                })

                                                            )}

                                                        </div>



                                                    </div>

                                                )}


                                            </form>

                                            <svg className={h.bottomContainer__phone__svg} onClick={handleCall} width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.04709 18C0.747923 18 0.498615 17.9 0.299169 17.7C0.0997229 17.5 0 17.25 0 16.95V12.9C0 12.6667 0.0747921 12.4623 0.224377 12.287C0.373961 12.1117 0.565097 11.9993 0.797784 11.95L4.23823 11.25C4.47091 11.2167 4.70792 11.2377 4.94925 11.313C5.19058 11.3883 5.38571 11.5007 5.53463 11.65L7.87812 14C9.14127 13.2333 10.2964 12.325 11.3435 11.275C12.3906 10.225 13.2632 9.1 13.9612 7.9L11.5679 5.45C11.4183 5.3 11.3225 5.129 11.2807 4.937C11.2388 4.745 11.2348 4.53267 11.2687 4.3L11.9169 0.8C11.9501 0.566667 12.0582 0.375 12.241 0.225C12.4238 0.0749999 12.6316 0 12.8643 0H16.903C17.2022 0 17.4515 0.0999999 17.651 0.3C17.8504 0.5 17.9501 0.75 17.9501 1.05C17.9501 3.2 17.4721 5.296 16.5161 7.338C15.5601 9.38 14.297 11.1883 12.7266 12.763C11.1563 14.3377 9.35302 15.6043 7.31668 16.563C5.28033 17.5217 3.19047 18.0007 1.04709 18Z" fill="white" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* тут рендер десктопа */
                                <div className="h.bottomContainer">
                                    <div className={h.bottomContainer}>
                                        <div style={{ display: "flex", gap: '2%', width: '100%', justifyContent: 'space-between' }}>
                                            <div className={h.bottomContainer__boxText}>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('hot_dishes')}>Горячие блюда

                                                </p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('first_dish')}>Супы
                                                </p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('paste')}>Паста</p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('hot_snacks', 'cold_snacks')}>Закуски</p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('salads')}>Салаты</p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('pizza')}>Пицца</p>
                                                <p className={h.bottomContainer__boxText__text} onClick={() => handlePoiskCard('burgers')}>Бургеры</p>
                                                <div className={`dropdown-container ${isOpen ? 'open' : ''}`}>
                                                    <div className="dropdown-header" onClick={toggleDropdown}>
                                                        {/* {selectedOption ? selectedOption.label : 'Другое '} */}
                                                        {'Другое'}
                                                        <ChevronDownCircle className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
                                                    </div>
                                                    {isOpen && (
                                                        <ul className="options-list">
                                                            {options.map((option, index) => (
                                                                <li key={index} onClick={() => handleSelectOption(option)}>
                                                                    {option.label}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={h.bottomContainer__phone} onClick={handleCall}>
                                                <svg className={h.svg} width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.04709 18C0.747923 18 0.498615 17.9 0.299169 17.7C0.0997229 17.5 0 17.25 0 16.95V12.9C0 12.6667 0.0747921 12.4623 0.224377 12.287C0.373961 12.1117 0.565097 11.9993 0.797784 11.95L4.23823 11.25C4.47091 11.2167 4.70792 11.2377 4.94925 11.313C5.19058 11.3883 5.38571 11.5007 5.53463 11.65L7.87812 14C9.14127 13.2333 10.2964 12.325 11.3435 11.275C12.3906 10.225 13.2632 9.1 13.9612 7.9L11.5679 5.45C11.4183 5.3 11.3225 5.129 11.2807 4.937C11.2388 4.745 11.2348 4.53267 11.2687 4.3L11.9169 0.8C11.9501 0.566667 12.0582 0.375 12.241 0.225C12.4238 0.0749999 12.6316 0 12.8643 0H16.903C17.2022 0 17.4515 0.0999999 17.651 0.3C17.8504 0.5 17.9501 0.75 17.9501 1.05C17.9501 3.2 17.4721 5.296 16.5161 7.338C15.5601 9.38 14.297 11.1883 12.7266 12.763C11.1563 14.3377 9.35302 15.6043 7.31668 16.563C5.28033 17.5217 3.19047 18.0007 1.04709 18Z" fill="white" />
                                                </svg>


                                                <p className={h.bottomContainer__phone__text} >8 (495) 139-64-44</p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                    </header>



                    <div className={h.container}>

                        <div className={h.user}>

                            <div className={adminka ? [h.nav__user, h.nav__user__active].join(' ') : [h.nav__user]}

                            >

                                <div className={h.nav__user__admin}>
                                    <p>{meuser.last_name} {meuser.first_name} </p>
                                </div>

                                <div className={h.nav__user__nav} onClick={handleDanniy}>
                                    <img src={admin1} alt="" />
                                    <p>Мои данные</p>
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

                            <div className={danniyTwo ? [h.nav__danniyTwo, h.nav__danniyTwo__active].join(' ') : [h.nav__danniyTwo]}>

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

                            <div className={danniy ? [h.nav__danniy, h.nav__danniy__active].join(' ') : [h.nav__danniy]}>

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

                            <div className={togglerPersonalInfo ? [h.nav__address, h.nav__address__active].join(' ') : [h.nav__address]}>

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

                            <div className={changes ? [h.nav__changes, h.nav__changes__active].join(' ') : [h.nav__changes]}>

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

                            <div className={zakaz ? [h.nav__zakaz, h.nav__zakaz__active].join(' ') : [h.nav__zakaz]}>

                                <div className={h.nav__danniy__header}>

                                    <div className={h.nav__danniy__header__info}>

                                        <img src={admin3} alt="svg" />

                                        <p className={h.nav__danniy__header__info__title}>
                                            Мои заказы
                                        </p>

                                    </div>

                                    <img src={X} className={h.nav__danniy__header__exit} alt="exit" onClick={handleDanniyExit} />

                                </div>

                                {MyZakaz.map((info, index) => {
                                    return (
                                        <MyZakazItem MyZakazCard={MyZakazCard} {...info} key={index} />
                                    );
                                })}


                            </div>


                        </div>

                    </div>

                </>




            }

        </>




    )
}