
import s from '../../pages/Home.module.scss'
import h from '../Header/Header.module.scss'

export default function ContentLogo ({Title}) {

    return (

        <>

        <div className={h.container}>

        <div className={s.content__logo}>

            <p className={s.content__logo__title}>
                {Title}
            </p>

            <hr />

        </div>

        </div>
        
        
        </>


    )
}