
import { Link, useNavigate } from 'react-router-dom';
import "./Combo.scss"
import s from '../../Home.module.scss';
import CardKarzina from './img/cardKarzina.svg'
import CardKarzinaAdd from './img/cardKarzinaAdd.svg';
// import h from '../Header/Header.module.scss'
// import b from '../../pages/Basket/Basket.module.scss'
const  ComboObed = ({
    addBasket,
    isAddedToCart,
    setkarzinkaTovar,
    karzinkaTovar,
    ...info
}) => {


    const tokenTwo = localStorage.getItem('token');

    return (
        <div className="ForAll" >
            <div className="Combo">
                <div className="ComboPhoto">
                    {info && info.images && info.images[0] && info.images[0].images ? (
                        <img src={info.images[0].image} alt="img" style={{width:'325px'}}/>
                    ) : (
                        <p>No image available</p>
                    )}
                </div>
                <div className="ComboInfo">
                    <h1>{info.title}</h1>
                    <div className="comboInfotext">
                        <h4>{info.description}</h4>
                    </div>
                    <div className="comboInfotext">
                        <p className="comboInfotextIn">{info.compound}</p>

                        <div className="comboInfotextInweight">
                            <p className="comboInfotextIn">{info.weight} г.</p>
                            <p className="comboInfotextIn">{info.calories} мл.</p>
                        </div>
                    </div>
                    <div className={s.mycard__item__footer}>
                        <p className={s.mycard__item__footer__sum}>{info.price} руб.</p>


                        {tokenTwo ? (
                            isAddedToCart ? (

                                <div>
                                    <img src={CardKarzinaAdd} alt="svg" className={s.mycard__item__footer__add} />
                                </div>

                            ) : (

                                <img
                                    src={CardKarzina}
                                    id={info.id}
                                    onClick={() => addBasket(info.id)}
                                    className={s.mycard__item__footer__kar}
                                    alt="svg"
                                />
                            )
                        ) : (
                            <Link to="/login">
                                <img src={CardKarzina} className={s.mycard__item__footer__kar} alt="svg" />
                            </Link>
                        )}
                    </div>
                    {isAddedToCart ? <p className={s.mycard__item__footer__text}>Товар добавлен в карзину</p> : ''}
                </div>
            </div>
        </div>
    )
}



export default ComboObed;