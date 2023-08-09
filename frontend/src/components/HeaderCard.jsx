
import { Link } from 'react-router-dom';
import h from './Header/Header.module.scss'

export default function HeaderCard ({setShowInfo ,...info}) {

    console.log(info);
    
    return (
        
        <>
        
        <div className={h.basketTovar__item}>
                                
            {/* <img src=''  className={h.basketTovar__item__img} alt="" /> */}

    {info && info.images && info.images[0] && info.images[0].images ? (
          <img src={info.images[0].images} alt="img" className={h.basketTovar__item__img} />
    ) : (
          <p>No image available</p>
        )}
        

                <div className={h.basketTovar__item__info}>
                                    
                    <Link className={h.basketTovar__item__info__title}
                    to={`/intercard/${info.id}`}
                    onClick={() => setShowInfo(false)} 
                    >{info.title}</Link>

                    <p className={h.basketTovar__item__info__subtitle}>{info.price} руб</p>

                </div>

        </div>        

        </>

    )
}