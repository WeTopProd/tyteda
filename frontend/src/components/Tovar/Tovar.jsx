import { useEffect, useState } from 'react';
import h from '../Header/Header.module.scss'
import del from '../Header/img/del.svg'
import axios from 'axios';

export default function Tovar ({...info}) {


    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
  
      axios.get('http://127.0.0.1:8000/api/goods/?is_favorited=true', {
      
      headers: {
          'Content-Type': 'application/json , multipart/form-data',
          'authorization': `Token ${tokenTwo}`
      }
  
      })
  
      .then((res) => {

        setImageUrls(res.data.results)

       })

      .catch((err) => console.error(err))
  
  }, [])

  console.log(imageUrls);

  const tokenTwo = localStorage.getItem('token')

    return (
        
    <div className={h.nav__kar__item}>
                
        <div className={h.nav__kar__item_info}>

        {imageUrls.map((item, index) => (

          item.images.map((image, idx) => (

            <img key={index + '-' + idx} src={image.images} alt={`Image ${index}-${idx}`} className={h.nav__kar__item_info_img} />

          ))

        ))}

            <div className={h.nav__kar__item_info_titles}>
                <p>{info.price} руб.</p>
                <p>{info.title}</p>
            </div>

            <img src={del} className={h.nav__kar__item_info__del} alt="svg" />

        </div>

    </div>

    )
}