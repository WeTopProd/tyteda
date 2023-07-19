import r from './Reg.module.scss'
import h from '../../components/Header/Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';



export default function Reg () {

    const navigate = useNavigate();
    
    const [Mail , setMail ] = useState('')

    const [Password , setPassword ] = useState('')

    const [PasswordReap , setPasswordReap ] = useState('')

    const [Name , setName ] = useState('')

    const [Surname , setSurname ] = useState('')

    const [Number , setNumber ] = useState('')



    return (
        
        <section className={r.section__reg}>
            <div className={h.container}>

                <form className={r.reg}>

                    <p className={r.reg__title}>
                    Регистрация
                    </p>

                <div className={r.reg__flex}>

                <div className={r.reg__item}>
                    
                    <input type="text" className={r.reg__item__inp} placeholder='Почта'
                    
                    value={Mail}
                    onChange={(event) => setMail(event.target.value)}

                    />

                    <input type="password" className={r.reg__item__inp} placeholder='Пароль'
                    
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)}

                    />


                    <input type="password" className={r.reg__item__inp} placeholder='Повторить пароль'
                    
                    value={PasswordReap}
                    onChange={(event) => setPasswordReap(event.target.value)}

                    />

                     

                </div>

                <div className={r.reg__item}>
                    
                    <input type="text" className={r.reg__item__inp} placeholder='Имя'
                    
                    value={Name}
                    onChange={(event) => setName(event.target.value)}

                    />

                    <input type="text" className={r.reg__item__inp} placeholder='Фамилия'
                    
                    value={Surname}
                    onChange={(event) => setSurname(event.target.value)}

                    />


                    <input type="number" className={r.reg__item__inp} placeholder='Телефон'
                    
                    value={Number}
                    onChange={(event) => setNumber(event.target.value)}

                    />

                     

                </div>

                </div> 

                <div className={r.reg__footer}>

                <Link onClick={() => navigate(-1)} className={r.reg__footer__link}>
                    Назад
                </Link>

                <div className={r.reg__footer__flex}>

                    <p className={r.reg__footer__text}>
                    Есть аккаунт?
                    </p>

                    <Link to={'/login'} className={r.reg__footer__link}>
                    Войдите!
                    </Link>

                </div>
                    

                </div>

                <Link to={'/'} className={r.reg__button}>
                Зарегистрироваться
                </Link>

                </form>
                

            </div>
        </section>

    )
}