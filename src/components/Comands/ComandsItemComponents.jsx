import React, { Component } from 'react'
import './ComandsItemComponents.scss'
export default class ComandsItemComponent extends Component {

	render() {
		const { img, title, subtitle, phoneNumber, email } = this.props
		return (
			<div className="comands">
				<div className="comands__card">
					<div className="comands__img">
						<img src={img} alt="comands__item-img" />
					</div>
					<h4 className="comands__item-title">{title}</h4>
					<p className='comands__item-subtitle'>{subtitle}</p>
					<p className='comands__item-number'>
						{phoneNumber}
					</p>
					<p className='comands__item-gmail'>{email}</p>
				</div>
			</div>
		)
	}
}