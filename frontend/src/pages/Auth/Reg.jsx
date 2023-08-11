import r from './Reg.module.scss'
import h from '../../components/Header/Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'



export default function Reg () {

    const navigate = useNavigate();
    
    const [Mail , setMail ] = useState('')

    const [Password , setPassword ] = useState('')

    const [PasswordReap , setPasswordReap ] = useState('')

    const [Name , setName ] = useState('')

    const [Surname , setSurname ] = useState('')

    const [Number , setNumber ] = useState('')

    const [modal, setmodal] = useState(false)

    const hanClickReg =  () => {

        // e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/users/', {

       phone: Number ,
       first_name: Name,
       last_name: Surname,
       email: Mail,
       password: Password,
       re_password: PasswordReap,

    },  {

        headers: {
            'Content-Type': 'application/json',

        }

    })

    .then(res => {

         res.request.status == 201 ? navigate('/login') : navigate('/register')
        
    } )

    .catch(err => {
    
    err.message === 'Request failed with status code 400' ? setmodal(true) : setmodal(false)

    } )

}



    return (
        
        <section className={r.section__reg}>
            

            <div className={h.container}>

            {modal ?

                <div className={r.form__modal}>
                    <p>не правильно ввели данные или</p>
                    <p>пользователь с таким почтовым ящиком уже существует.</p>
                </div>

                :

                ''             
            }

                <form className={r.reg} onSubmit={hanClickReg}>

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


                    <input type="tel" className={r.reg__item__inp} placeholder='Телефон'
                    
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

                <Link to={'/register'} type='submit' onClick={hanClickReg} className={r.reg__button}>
                Зарегистрироваться
                </Link>

                </form>
                

            </div>
        </section>

    )

}