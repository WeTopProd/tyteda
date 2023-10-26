import r from './Reg.module.scss'
import h from '../../components/Header/Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'



export default function Reg() {

    const navigate = useNavigate();

    const [Mail, setMail] = useState('')

    const [Password, setPassword] = useState('')

    const [PasswordReap, setPasswordReap] = useState('')

    const [Name, setName] = useState('')

    const [Surname, setSurname] = useState('')

    const [Number, setNumber] = useState('')

    const [modal, setmodal] = useState(false)

    const [error, setError] = useState(null);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');


    const hanClickReg = () => {

        // e.preventDefault()
        axios.post('https://tyteda.ru/api/users/', {

            phone: Number,
            first_name: Name,
            last_name: Surname,
            email: Mail,
            password: Password,
            re_password: PasswordReap,

        }, {

            headers: {
                'Content-Type': 'application/json',

            }

        })

            .then(res => {

                res.request.status == 201 ? navigate('/login') : navigate('/register')

            })

            .catch((err) => {
                if (err.response.status === 400) {
                    const errorResponse = err.response.data;
                    setErrorEmail(errorResponse.email || null);
                    setErrorPhone(errorResponse.phone || null);
                    setErrorPassword(errorResponse.password || null);
                    setErrorFirstName(errorResponse.first_name || null);
                    setErrorLastName(errorResponse.last_name || null);
                } else {
                    setError('Произошла неизвестная ошибка.');
                }
                setmodal(false);

            });

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

                            <div>
                                <input type="text" className={r.reg__item__inp} placeholder='Почта'

                                    value={Mail}
                                    onChange={(event) => setMail(event.target.value)}

                                />
                                {errorEmail && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorEmail}</p>}
                            </div>


                            <div>
                                <input type="password" className={r.reg__item__inp} placeholder='Пароль'

                                    value={Password}
                                    onChange={(event) => setPassword(event.target.value)}

                                />
                                {errorPassword && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorPassword}</p>}
                            </div>

                            <div>
                                <input type="password" className={r.reg__item__inp} placeholder='Повторить пароль'

                                    value={PasswordReap}
                                    onChange={(event) => setPasswordReap(event.target.value)}

                                />
                                {errorPassword && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorPassword}</p>}
                            </div>
                        </div>

                        <div className={r.reg__item}>

                            <div>
                                <input type="text" className={r.reg__item__inp} placeholder='Имя'

                                    value={Name}
                                    onChange={(event) => setName(event.target.value)}

                                />
                                {errorFirstName && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorFirstName}</p>}
                            </div>
                            <div>
                                <input type="text" className={r.reg__item__inp} placeholder='Фамилия'

                                    value={Surname}
                                    onChange={(event) => setSurname(event.target.value)}

                                />
                                {errorLastName && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorLastName}</p>}
                            </div>
                            <div>
                                <input type="tel" className={r.reg__item__inp} placeholder='Телефон'

                                    value={Number}
                                    onChange={(event) => setNumber(event.target.value)}

                                />
                                {errorPhone && <p style={{ color: 'red', fontSize: '12px', padding: '0 15px' }}>{errorPhone}</p>}
                            </div>
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