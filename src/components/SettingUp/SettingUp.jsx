import React, { useState } from 'react';
import classNames from 'classnames';
import img1 from '../../images/setting1.png';
import img2 from '../../images/setting2.png';
import './SettingUp.scss';
import { useTranslation } from 'react-i18next';

export const SettingUp = () => {
  const [isBooking, setIsBooking] = useState(false);

  const { t } = useTranslation();

  return (
    <section className="SettingUp">
      <div className="SettingUp__info">
        <h2 className="SettingUp__title">{t('S.text8')}</h2>
        <div className="SettingUp__nav">
          <button
            className={
              classNames(`SettingUp__btn + ${!isBooking
                ? 'SettingUp__btn--active'
                : ''
              }`)
            }
            type="button"
            onClick={() => setIsBooking(false)}
          >
            {t('S.text6')}
          </button>
          <button
            className={
              classNames(`SettingUp__btn + ${isBooking
                ? 'SettingUp__btn--active'
                : ''
              }`)
            }
            type="button"
            onClick={() => setIsBooking(true)}
          >
            Booking.com
          </button>
        </div>
        {!isBooking ? (
          <div className="SettingUp__contentBlock">
            <p className="SettingUp__content">
            {t('S.text1')}
            </p>
            <p className="SettingUp__content">
            {t('S.text2')}
            </p>
            <p className="SettingUp__content">
            {t('S.text3')}
            </p>
          </div>
        ) : (
          <div className="SettingUp__contentBlock">
            <p className="SettingUp__content">
            {t('S.text4')}
            </p>
            <p className="SettingUp__content">
            {t('S.text5')}
            </p>
            <p className="SettingUp__content">
            {t('S.text7')}
            </p>
          </div>
        )}
      </div>
      <div className="SettingUp__images">
        <img
          className={
            classNames(`SettingUp__img SettingUp__img--1 + ${isBooking
              ? 'SettingUp__img--hide'
              : ''
            }`)
          }
          src={img1}
          alt="phone adWords"
        />
        <img
          className={
            classNames(`SettingUp__img SettingUp__img--2 + ${!isBooking
              ? 'SettingUp__img--hide'
              : ''
            }`)
          }
          src={img2}
          alt="phone booking.com"
        />
      </div>
    </section>
  );
};
