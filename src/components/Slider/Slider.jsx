import React from 'react';
import PropTypes from 'prop-types';
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { useTranslation } from 'react-i18next';
import './Slider.scss';

export const Slider = ({ navigationPrevRef, navigationNextRef }) => {

  const { t } = useTranslation();

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[
        Autoplay,
        Pagination,
        Navigation,
        Mousewheel,
        Keyboard,
      ]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
        // prevEl: Slider__prev,
        // nextEl: navigationNextRef.current,
      }}
      pagination={{ clickable: true }}
      mousewheel
      keyboard={{ enabled: true }}
      className="Slider"
    >
      <SwiperSlide>
        <div className="Slider__block">
          <h3 className="Slider__title">{t('Slider.text1')}</h3>
          <div className="Slider__infoBlock">
            <p className="Slider__info">
               {t('Slider.text2')}
            </p>
            <p className="Slider__info">
              {t('Slider.text3')}
            </p>
            <p className="Slider__info">
              {t('Slider.text4')}
            </p>
            <p className="Slider__info">
              {t('Slider.text5')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Slider__block">
          <h3 className="Slider__title"></h3>
          <div className="Slider__infoBlock">
            <p className="Slider__info">
              {t('Slider.text6')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Slider__block">
          <h3 className="Slider__title"></h3>
          <div className="Slider__infoBlock">
            <p className="Slider__info">
              {t('Slider.text7')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="Slider__block">
          <h3 className="Slider__title"></h3>
          <div className="Slider__infoBlock">
            <p className="Slider__info">
             {t('Slider.text8')}
            </p>
          </div>
        </div>
      </SwiperSlide>
      {/* <button type="button" className="Slider__btn Slider__prev" />
      <button type="button" className="Slider__btn Slider__next" /> */}
    </Swiper>
  );
}





Slider.propTypes = {
  navigationPrevRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  navigationNextRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
