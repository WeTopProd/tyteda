
import s from '../../pages/Home.module.scss'
import h from '../Header/Header.module.scss'


export default function Filter () {

    return (

        <section className={s.section__filter}>
            <div className={h.container}>
                
                <div className={s.filter}>
                    
                    <p className={s.filter__title}>
                    Выберите тип блюдо 
                    </p>

                    <form className={s.filter__form}>

                    <select className={s.filter__form__select}>
                        <option value="Выбрать">Выбрать</option>
                        <option value="Горячие блюда">Горячие блюда</option>
                        <option value="Супы">Супы</option>
                        <option value="Паста">Паста</option>
                        <option value="Закуски">Закуски</option>
                        <option value="Салаты">Салаты</option>
                        <option value="Гарниры">Гарниры</option>
                        <option value="Пицца">Пицца</option>
                        <option value="Бургеры">Бургеры</option>
                        <option value="Десерты">Десерты</option>
                        <option value="Напитки">Напитки</option>
                        <option value="Хачапури">Хачапури</option>
                        <option value="Осетинские пироги">Осетинские пироги</option>
                        <option value="Соусы">Соусы</option>
                        <option value="Блюда на мангале">Блюда на мангале</option>
                        <option value="Роллы">Роллы</option>
                        <option value="Пивные закуски">Пивные закуски</option>
                        <option value="Хлеб">Хлеб</option>
                        <option value="Вок">Вок</option>
                    </select>

                    <button className={s.filter__button}>
                        Поиск
                    </button>

                    </form>



                </div>

            </div>
        </section>
        
    ) 
    
}