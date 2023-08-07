import k from './KidsMenu.module.scss'
import h from '../../components/Header/Header.module.scss'
import s from '../Home.module.scss'
import CardInfoKids from './ContentKids/CardInfoKids'
import CardKids from './ContentKids/CardKids'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function KidsMenu ({
    
    isAddedToCart,
    karzinkaTovar,
    setkarzinkaTovar,
    addBasket
    
    }) {
    
    const [CardKidsInfo , setCardKidsInfo] = useState([])

    useEffect(() => {
    
      axios.get('http://127.0.0.1:8000/api/goods/?type=children_menu', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
    
      })
    
      .then((res) => {
    
        setCardKidsInfo(res.data.results)
    
       })
    
      .catch((err) => console.error(err))
    
    }, [])

    console.log(CardKidsInfo);

  const tokenTwo = localStorage.getItem('token')


    return (

        <>

        <section className={k.section__menu}>
            <div className={h.container}>

                <div className={k.menu}>
                    
                    <p className={k.menu__title}>
                    Детское меню
                    </p>

                    <p className={k.menu__subtitle}>
                    Наше детское меню включает в себя разнообразные блюда, которые не только вкусные, но и питательные. Мы используем только свежие и натуральные ингредиенты, чтобы обеспечить вашего ребенка здоровой пищей
                    </p>


                </div>

            </div>
        </section>

        <section className={k.section__mycard}>
            <div className={h.container}>
                
            <div className={s.mycard}>

               {CardKidsInfo.map( (info , index) => {
                return <CardKids 
                
                addBasket={addBasket}  isAddedToCart={karzinkaTovar.some((item) => item.id === info.id)} {...info} key={index}
                
                />
               } )}
                
            </div>

            </div>
        </section>
        
        </>
        

    )
}