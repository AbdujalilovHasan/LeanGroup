import './Contacts.scss'
import userIcon from '../../assets/images/Vector (1).png'
import callIcon from '../../assets/images/Vector (2).png'

const Contacts = () => {
    return (
        <section className='contact'>
            <div className="contact__box">
                <h1>
                    Получить подробную <span>информацию</span>
                </h1>
                <p>
                    Просто заполните форму, наш менеджер свяжется вами в ближайшее время
                </p>
                <form action="">
                    <div className="form name">
                        <div className="form__icon">
                            <img width={'14.63px'} src={userIcon} alt="" />
                        </div>
                        <div className="form__input">
                            <input type="text" placeholder='Ваше имя' />
                        </div>
                    </div>
                    <div className="form call">
                        <div className="form__icon">
                            <img width={'14.63px'} src={callIcon} alt="" />
                        </div>
                        <div className="form__input">
                            <input type="text" placeholder='+375 (29) 0000000' />
                        </div>
                    </div>
                    <div className="form texarea">
                        <textarea cols={58}>Комментарий</textarea>
                    </div>
                    <div className="form__btn">
                        <button>
                            Получить информацию
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contacts