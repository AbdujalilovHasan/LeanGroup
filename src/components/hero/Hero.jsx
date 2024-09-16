import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './Hero.scss'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import vk from '../../assets/images/vk.png'

const Hero = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="hero">
          <div className="hero__bg-img">
            <div className="hero__row">
              <div className="hero__left">
                <h4>
                  LEANGROUP - тубы и этикетки
                </h4>
                <h1>
                  Ламинатные тубы
                </h1>
                <p>
                  Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                </p>
                <div className="her0__btn">
                  <button>Каталог</button>
                </div>
              </div>
              <div className="hero__right">
                <div className="hero__icons">
                  <img src={vk} alt="vkIcon" />
                </div>
                <div className="hero__icons">
                  <FaFacebookF />
                </div>
                <div className="hero__icons">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero">
          <div className="hero__bg-img">
            <div className="hero__row">
              <div className="hero__left">
                <h4>
                  LEANGROUP - тубы и этикетки
                </h4>
                <h1>
                  Ламинатные тубы
                </h1>
                <p>
                  Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                </p>
                <div className="hero__btn">
                  <button>Каталог</button>
                </div>
              </div>
              <div className="hero__right">
                <div className="hero__icons">
                  <img src={vk} alt="vkIcon" />
                </div>
                <div className="hero__icons">
                  <FaFacebookF />
                </div>
                <div className="hero__icons">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero">
          <div className="hero__bg-img">
            <div className="hero__row">
              <div className="hero__left">
                <h4>
                  LEANGROUP - тубы и этикетки
                </h4>
                <h1>
                  Ламинатные тубы
                </h1>
                <p>
                  Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
                </p>
                <div className="hero__bottom-btn">
                  <button>Каталог</button>
                </div>
              </div>
              <div className="hero__right">
                <div className="hero__icons">
                  <img src={vk} alt="vkIcon" />
                </div>
                <div className="hero__icons">
                  <FaFacebookF />
                </div>
                <div className="hero__icons">
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Hero