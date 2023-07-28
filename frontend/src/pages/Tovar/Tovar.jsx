import t from './Tovar.module.scss'
import h from '../../components/Header/Header.module.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Content/Card';
import ContentLogo from '../../components/Content/ContentLogo';

export default function Tovar ({

  isAddedToCart,
  karzinkaTovar,
  addBasket

}) {
    
    const [Tovar, setTovar] = useState([]);

    const [final , setFinal] = useState([])

    useEffect(() => {
  
      axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
  
      })
  
      .then((res) => {

        setTovar(res.data.results)

       })

      .catch((err) => console.error(err))
  
  }, [])


  const tokenTwo = localStorage.getItem('token')


    return (

        <>        
        <section className={t.section__tovar}>

        <ContentLogo Title='Избранные блюда' />

            <div className={h.container}>

                <div className={t.tovar}> 
                    
        {Tovar.length === 0 ? (

            <p className={t.tovar__text}>Пока что нет избранных товаров.</p>

          ) : (
            
            Tovar.map((info, index) => {
              return <Card {...info} key={index}

              addBasket={addBasket}  isAddedToCart={karzinkaTovar.some((item) => item.id === info.id)} 
              
              />;
            })

        )}
                    
                </div>

            </div>
        </section>

    </>


    )
}