import { useState } from 'react'

import o from './Oplata.module.scss'
import h from '../Header/Header.module.scss'

import axios from 'axios'


export default function ReturnInfo () {
    
    const [uslugi, setuslugi] = useState('')

    const [Info, setInfo] = useState('')

    const [Cart, setCart] = useState('')

    const [File, setFile] = useState('')

    const [textButton, setTextButton] = useState(false)

    const fotoUpload = (e) => {
        setFile(e.target.files[0])
    }


        const HandleVozvrat = (e) => { 

            e.preventDefault()
            

        axios.post('https://tyteda.ru/api/send-email/', {

        cancel_service: uslugi,
        description: Info,
        num_card: Cart,
        file: File
            
        },
        
        {
            headers : {
            'Content-Type': 'application/json , multipart/form-data',
            authorization: `Token ${tokenTwo}`
            }            
        }
    
        )

        .then(res => {
            
            setuslugi('')

            setInfo('')
        
            setCart('')
        
            setFile('')

            setTextButton(true)
        
        })
            
        };

        const tokenTwo = localStorage.getItem('token')

  

    return (

        <>
        
        <section className={o.section__oplata}>
            <div className={h.container}>
                
                <p className={o.oplata__title}>
                Отказ от платных услуг и возврат
                </p>

                <div className={o.return}>
                    
                    <form className={o.return__item} onSubmit={HandleVozvrat}>
                        
                        <select className={o.return__select} 
                        value={uslugi} onChange={(event) => setuslugi(event.target.value)}
                        >

                            <option value="Выберете услугу от которой хотите отказаться">Выберете услугу от которой хотите отказаться</option>
                            
                            <option value="Платное составление полного резюме за вас: 200 рублей;">Платное составление полного резюме за вас: 200 рублей;</option>

                            <option value="Платное составление резюме и его продвижение в поиске: 700 рублей;">Платное составление резюме и его продвижение в поиске: 700 рублей;</option>

                            <option value="Все вклчено. Составление резюме, продвижение резюме на 30 дней: 2000 рублей.">Все вклчено. Составление резюме, продвижение резюме на 30 дней: 2000 рублей.</option>

                            <option value="Разблокирование одного номера соискателя: 100 руб;">Разблокирование одного номера соискателя: 100 руб;</option>

                            <option value="Разблокировать шесть номеров соискателей: 500руб;">Разблокировать шесть номеров соискателей: 500руб;</option>

                            <option value="Доступ ко всем номерам соискателей на 30 дней: 2000 руб.">
                            Доступ ко всем номерам соискателей на 30 дней: 2000 руб.
                            </option>

                        </select>

                        <textarea className={o.return__textarea} placeholder='Опишите с чем связан отказ от услуги '
                        value={Info} onChange={(event) => setInfo(event.target.value)}
                        >

                        </textarea>

                        <input type="number" className={o.return__cart} placeholder='Напишите Номер карты куда вернуть средства'
                        
                        value={Cart} onChange={(event) => setCart(event.target.value)} />

                        <div className={o.return__fileApp}>
                        <input type="file" className={o.ruturn__file} onChange={fotoUpload} />
                        </div>


                        <button className={o.return__btn} onClick={HandleVozvrat}> 

                        { textButton ?

                            'Отправлено'

                            :

                            "Отправить"

                        }

                        </button>

                    </form>

                    <ul className={o.return__info}> 
                        <p>Процедура возврата товара регламентируется статьей 26.1 федерального закона «О защите прав потребителей».
                        </p><br></br>
                         <li className={o.return__info__text}><p>
                         • Потребитель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение семи дней;</p></li><br></br>

                         <li className={o.return__info__text}>
                         • При отказе потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную потребителем по договору, за исключением расходов продавца на доставку от потребителя возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем соответствующего требования;
                         </li><br></br>

                        <li className={o.return__info__text}>
                         • Потребитель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его человеком.
                        </li>
                        
                    </ul>


                </div>

            </div>
        </section>
        
        </>
        

    )

}