import React, { Component } from 'react'
import logo from "../../assets/images/logo (1).png"
import fb from '../../assets/images/fb.png'
import lk from '../../assets/images/linkedin.png'
import wk from '../../assets/images/vk.png'
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-row">
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="icons">
                                <div className="icon">
                                    <img src={wk} alt="vkontakte" />
                                </div>
                                <div className="icon">
                                    <img src={fb} alt="feathbook" />
                                </div>
                                <div className="icon">
                                    <img src={lk} alt="linkedin" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-main">
                        <div className="left">
                            <div className="card">
                                <h1>Продукция</h1>
                                <ul className="card-text">
                                    <li className='card-texts'>
                                        <a href="#link">Ламинатные тубы</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Экструзионные тубы</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Другая упаковка</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card">
                                <h1>Компания</h1>
                                <ul className="card-text">
                                    <li className='card-texts'>
                                        <a href="#link">О нас</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Наша команда</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Сертификаты</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card">
                                <h1>Разделы</h1>
                                <ul className="card-text">
                                    <li className='card-texts'>
                                        <a href="#link">Контакты</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Новости</a>
                                    </li>
                                    <li className='card-texts'>
                                        <a href="#link">Вакансии</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">
                            <div className="col-4">
                                <h3>Беларусь</h3>
                                <div className="numbers">
                                    <p>+375 (17) 270 53 77</p>
                                    <p>+375 (17) 270 53 78</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3>Европа</h3>
                                <div className="numbers">
                                    <p>+48 73 1111 044</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3>Москва</h3>
                                <div className="numbers">
                                    <p>+7 (495) 280 73 44</p>
                                    <p>+7 (495) 280 73 44</p>
                                </div>
                            </div>
                            <div className="col-4">
                                <h3>Екатеринбург</h3>
                                <div className="numbers">
                                    <p>+7 (343) 346 82 06</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bootom">
                        <p>© 2022 Leangroup. All Rights Reserved.
                            Разработка и продвижение сайтов SkyWeb.by</p>
                    </div>
                </div>
            </footer>
        )
    }
}