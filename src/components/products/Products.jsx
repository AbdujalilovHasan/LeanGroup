import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import productImg1 from '../../assets/images/1.png';
import productImg2 from '../../assets/images/2.png';
import productImg3 from '../../assets/images/3.png';
import productImg4 from '../../assets/images/4.png';
import productImg5 from '../../assets/images/5.png';
import './Products.scss';

export default class ProductDisplay extends Component {
    render() {
        return (
            <section className="product-display">
                <div className="wrapper">
                    <h1 className="heading-title">Наша <span>продукция</span></h1>
                    <Tabs className={"product-tabs"}>
                        <TabList className={"tab-headers"}>
                            <Tab className={"tab-header"}>Ламинатные тубы</Tab>
                            <Tab className={"tab-header"}>Экструзионные тубы</Tab>
                            <Tab className={"tab-header"}>Экструзионные тубы</Tab>
                        </TabList>

                        <TabPanel className="tab-content">
                            <div className="image-grid">
                                <div className="image-wrapper">
                                    <img src={productImg1} alt="Product 1" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg2} alt="Product 2" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg3} alt="Product 3" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg4} alt="Product 4" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg5} alt="Product 5" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className="tab-content">
                            <div className="image-grid">
                                <div className="image-wrapper">
                                    <img src={productImg5} alt="Product 5" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg2} alt="Product 2" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg1} alt="Product 1" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg3} alt="Product 3" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg4} alt="Product 4" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel className="tab-content">
                            <div className="image-grid">
                                <div className="image-wrapper">
                                    <img src={productImg2} alt="Product 2" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg5} alt="Product 5" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg1} alt="Product 1" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg3} alt="Product 3" />
                                </div>
                                <div className="image-wrapper">
                                    <img src={productImg4} alt="Product 4" />
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div className="catalog-btn">
                        <button>Перейти в каталог</button>
                    </div>
                </div>
            </section>
        );
    }
}
