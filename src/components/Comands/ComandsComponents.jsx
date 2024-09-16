import React, { Component } from 'react';
import comands from '../../constants/comand';
import ComandsItemComponents from './ComandsItemComponents';
import './ComandsComponents.scss';

export default class ComandsComponents extends Component {
    render() {
        return (
            <div className='comands'>
                <h1 className='comands__title'>
                    Наша <span>команда</span>
                </h1>
                <div className="comands__row-list">
                    {comands.map((el, index) => (
                        <ComandsItemComponents
                            key={index}
                            img={el.img}
                            title={el.title}
                            subtitle={el.subtitle}
                            phoneNumber={el.phoneNumber}
                            email={el.email}
                        />
                    ))}
                </div>
                <div className='comands__btn'>
                    <button>Наша команда</button>
                </div>
            </div>
        );
    }
}
