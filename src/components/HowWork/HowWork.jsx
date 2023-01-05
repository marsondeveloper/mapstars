import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import img1 from '../../images/howWork1.jpg';
import img2 from '../../images/howWork2_1.png';
import img3 from '../../images/howWork3_1.png';
import './HowWork.scss';
import './HowWorkBlock.scss';
import { useTranslation } from 'react-i18next';



export const HowWork = ({ howWorkRef }) => {

  const { t } = useTranslation();

  return (
    <section className="HowWork" ref={howWorkRef}>
      <div className="HowWork__content">
        <div className="HowWork__step HowWork__step--1">
          <Fade delay={300} bottom>
            <h2 className="HowWork__title">
            {t('HowWork.work')}
            </h2>
          </Fade>
          <p className="HowWork__steps">
          {t('HowWork.text1')}
          </p>
          <div className="HowWork__info">
            <div className="HowWork__images HowWork__images--1">
              <img
                className="HowWork__img"
                src={img1}
                alt="how registration phone"
              />
            </div>
            <div className="HowWorkBlock HowWorkBlock--1">
              <p className="HowWorkBlock__step">01</p>
              <h3 className="HowWorkBlock__title">{t('HowWork.text10')}</h3>
              <div className="HowWorkBlock__contentBlock">
                <p className="HowWorkBlock__content">
                  {t('HowWork.text2')}
                </p>
                <p className="HowWorkBlock__content">
                  {t('HowWork.text3')}
                </p>
                <p className="HowWorkBlock__content">
                  {t('HowWork.text4')}
                </p>
                <p className="HowWorkBlock__content">
                  {t('HowWork.text5')}
                </p>
              </div>
            </div>
          </div>
  
        </div>
        <div className="HowWork__step HowWork__step--2">
          <div className="HowWorkBlock">
            <p className="HowWorkBlock__step">02</p>
            <h3 className="HowWorkBlock__title">
                {t('HowWork.text6')}
            </h3>
            <div className="HowWorkBlock__contentBlock">
              <p className="HowWorkBlock__content">
                {t('HowWork.text7')}
              </p>
              <p className="HowWorkBlock__content">
                {t('HowWork.text8')}
              </p>
              <p className="HowWorkBlock__content">
                {t('HowWork.text9')}
              </p>
              <p className="HowWorkBlock__content">
                {t('HowWork.text11')}
              </p>
            </div>
          </div>
          <div className="HowWork__images HowWork__images--2">
            <img
              className="HowWork__img"
              src={img2}
              alt="technology"
            />
          </div>
        </div>
        <div className="HowWork__step HowWork__step--3">
          <div className="HowWork__images HowWork__images--3">
            <img
              className="HowWork__img"
              src={img3}
              alt="how analytic"
            />
          </div>
          <div className="HowWorkBlock HowWorkBlock--3">
            <p className="HowWorkBlock__step">03</p>
            <h3 className="HowWorkBlock__title">
              {t('HowWork.text12')}
            </h3>
            <div className="HowWorkBlock__contentBlock">
              <p className="HowWorkBlock__content">
               {t('HowWork.text13')}
              </p>
              <p className="HowWorkBlock__content">
                {t('HowWork.text14')}
              </p>
              <p className="HowWorkBlock__content">
                {t('HowWork.text15')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




HowWork.propTypes = {
  howWorkRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
