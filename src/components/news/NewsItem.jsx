import React, { Component } from 'react'
import './NewsItem.scss'
export default class NewsItem extends Component {

	render() {
		const { img, title, date } = this.props
		return (
			<div className="news">
				<div className="news__card">
					<div className="news__img">
						<img src={img} alt="news__item-img" />
					</div>
					<p className='news__item-date'>{date}</p>
					<h4 className="news__item-title">{title}</h4>
				</div>
			</div>
		)
	}
}