import img1 from '../../pages/combo/img/1.svg'
import img2 from '../../pages/combo/img/2.svg'
import img3 from '../../pages/combo/img/3.svg'
import img4 from '../../pages/combo/img/4.svg'
import img5 from '../../pages/combo/img/5.svg'

import c from '../../pages/combo/Combo.module.scss'

export default function MenuCard ({...info}) {
    return (
        
        <div className={c.menu__item}>
                    
        <p className={c.menu__item__title}>
        {info.deyweek}
        </p>

        <div className={c.menu__item__ul}>
            
            <li className={c.menu__item__ul__li}>
                <img src={img1} alt="" />
                <p>{info.text1}</p>
            </li>

            <li className={c.menu__item__ul__li}>
                <img src={img2} alt="" />
                <p>{info.text2}</p>
            </li>

            <li className={c.menu__item__ul__li}>
                <img src={img3} alt="" />
                <p>{info.text3}</p>
            </li>

            <li className={c.menu__item__ul__li}>
                <img src={img4} alt="" />
                <p>{info.text4}</p>
            </li>

            <li className={c.menu__item__ul__li}>
                <img src={img5} alt="" />
                <p>{info.text5}</p>
            </li>

        </div>

    </div>

    )
}