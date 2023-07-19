import r from './Reg.module.scss'
import h from '../../components/Header/Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';



export default function Login () {

    const navigate = useNavigate();
    
    const [MailPhone , setMailPhone ] = useState('')

    const [Password , setPassword ] = useState('')



    return (
        
        <section className={r.section__reg}>
            <div className={h.container}>

                <form className={r.reg}>

                    <p className={r.reg__title}>
                    Вход
                    </p>

                <div className={r.reg__login}>
                    
                    <input type="text" className={r.reg__login__inp} placeholder='Почта или телефон'
                    
                    value={MailPhone}
                    onChange={(event) => setMailPhone(event.target.value)}

                    />

                    <input type="password" className={r.reg__login__inp} placeholder='Пароль'
                    
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)}

                    />

                </div> 

                <div className={r.reg__footer}>

                <Link onClick={() => navigate(-1)} className={r.reg__footer__link}>
                    Назад
                </Link>
                    

                </div>

                <Link to={'/'} className={r.reg__button}>
                Войти
                </Link>

                </form>
                

            </div>
        </section>

    )
}