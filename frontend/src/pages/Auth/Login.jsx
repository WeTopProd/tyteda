import r from './Reg.module.scss'
import h from '../../components/Header/Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Login({ setToken, setIsActive, token }) {

    const navigate = useNavigate();

    const [ValuePocht, setValuePocht] = useState('');

    const [Password, setPassword] = useState('')

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [modal, setmodal] = useState(false)

    const [error, setError] = useState(null);

    const tokenTwo = localStorage.getItem('token')



    const Login = (e) => {

        e.preventDefault()

        axios.post(`https://tyteda.ru/api/auth/${emailRegex.test(ValuePocht) ? 'token-email' : 'token-phone'}/`,

            {
                email: emailRegex.test(ValuePocht) === true ? ValuePocht : null,
                phone: !emailRegex.test(ValuePocht) ? ValuePocht : null,
                password: Password,
            },

            {
                headers: {

                    'Content-Type': 'application/json',


                }

            }

        )

            .then(res => {
                res.request.status == 200 ? navigate('/') : navigate('/login')
                setIsActive(false)
                localStorage.setItem('isAuthorized', 'true');
                setToken(res.data.auth_token)
                localStorage.setItem('token', res.data.auth_token);
                window.location.reload()


            })

            .catch(err => {


                if (err.response.status === 400) {
                    setError(err.response.data.message);
                } else {
                    setError(err.response.data.message);
                }
                setmodal(false);

            })

    }





    return (

        <section className={r.section__reg}>
            <div className={h.container}>

                {modal ?

                    <div className={r.form__modal}>
                        <p>не правильно ввели данные</p>
                    </div>

                    :

                    ''
                }

                <form onSubmit={Login} className={r.reg}>

                    <p className={r.reg__title}>
                        Вход
                    </p>

                    <div className={r.reg__login}>

                        <input type="text" className={r.reg__login__inp} placeholder='Почта или телефон'

                            value={ValuePocht}
                            onChange={(event) => setValuePocht(event.target.value)}

                        />

                        <input type="password" className={r.reg__login__inp} placeholder='Пароль'

                            value={Password}
                            onChange={(event) => setPassword(event.target.value)}

                        />
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                    </div>

                    <div className={r.reg__footer}>

                        <Link onClick={() => navigate(-1)} className={r.reg__footer__link}>
                            Назад
                        </Link>


                    </div>

                    <button onClick={Login} style={{ border: 'none' }} className={r.reg__button}>
                        Войти
                    </button>

                </form>


            </div>
        </section>

    )
}