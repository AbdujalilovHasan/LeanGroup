import logo from '../../assets/images/logo (1).png'
import './Header.scss'

const Header = () => {
  return (
    <nav className='nav'>
      <div className="nav__row">
        <div className="nav__left">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="nav__center">
          <ul>
            <div class="nav__links">
              <ul>
                <li>
                  <div class="dropdown">
                    <button class="dropbtn">Продукция
                    </button>
                    <div class="dropdown-content">
                      <a href="#link1">Ламинатные тубы</a>
                      <a href="#link2">Экструзионные тубы</a>
                      <a href="#link3">Другая упаковка</a>
                    </div>
                  </div>
                </li>
                <hr />
                <li>
                  <a href="#home">Сертификаты</a>
                </li>
                <hr />
                <li>
                  <a href="#kamanda">Наша команда</a>
                </li>
                <hr />
                <li>
                  <a href="#about">O нас</a>
                </li>
                <hr />
                <li>
                  <a href="#news">Новости</a>
                </li>
                <hr />
                <li>
                  <a href="#news">Вакансии</a>
                </li>
                <hr />
                <li>
                  <a href="#contact">Контакты</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
        <div className="nav__right">
          <div className="nav__ru">
            <p>
              RU
            </p>
          </div>
          <hr />
          <div className="nav__en">
            <p>
              EN
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header