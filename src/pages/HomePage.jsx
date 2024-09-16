import './HomePage.scss'

import { Component, Fragment } from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Contacts from '../components/contacts/Contacts'
import Certificats from '../components/certificate/Certificate'
import Footer from '../components/footer/Footer'
import Hero from '../components/hero/Hero'
import ComandsComponents from '../components/Comands/ComandsComponents'
import News from '../components/news/News'
import Products from '../components/products/Products'
import BackTop from '../components/BacTop/BacTop'

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <BackTop />
                <Hero />
                <div className="container">
                    <main>
                        <About />
                        <Certificats />
                        <Products />
                        <Contacts />
                        <ComandsComponents />
                        <News />
                    </main>
                </div>
                <Footer />
            </Fragment >
        )
    }
}
