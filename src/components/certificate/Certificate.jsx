import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './Certificate.scss'
import cerImg1 from '../../assets/images/image 7.svg'
import cerImg2 from '../../assets/images/image 8.svg'
import cerImg3 from '../../assets/images/image 9.svg'
import cerImg4 from '../../assets/images/image 10.svg'
import cerImg5 from '../../assets/images/image 11.png'

export default class Certificate extends Component {
    render() {
        return (
            <div className="certificate">
                <h1>
                    Качество продукции подтверждают <span>сертификаты</span>
                </h1>
                <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        navigation={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg3} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg4} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg5} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg1} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg2} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg3} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg4} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="certificate__img">
                <img src={cerImg5} alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        )
    }
}
