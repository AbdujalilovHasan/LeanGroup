import React, { Component } from 'react';
import news from '../../constants/news';
import './News.scss';
import NewsItem from './NewsItem';

export default class News extends Component {
    render() {
        return (
            <div className='news'>
                <h1 className='news__title'>
                    Новости
                </h1>
                <div className="news__row-list">
                    {news.map((el, index) => (
                        <NewsItem
                            key={index}
                            img={el.img}
                            date={el.date}
                            title={el.title}
                        />
                    ))}
                </div>
                <div className='news__btn'>
                    <button>Все новости</button>
                </div>
            </div>
        );
    }
}
