import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image from '../../images/homePage.png';
import { useTranslation } from 'react-i18next';

import './HomePage.scss';

export const HomePage = ({ getStarted }) => {
  // #region scrollBottom
  const [scrollBtn, setScrollBtn] = useState(false);

  const windowBottom = document.body.scrollHeight;

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: windowBottom, left: 0, behavior: 'smooth' });
  }, [scrollBtn]);
  // #endregion

  const apps = [];

  for (let i = 1; i <= 10; i += 1) {
    apps.push(i);
  }

  const ellipses = [];

  for (let i = 1; i <= 7; i += 1) {
    ellipses.push(i);
  }

  return (
    <section className="HomePage">
      <div className="HomePage__conteiner">
        <div className="HomePage__content">
          <h1 className="HomePage__h1">
            MapStars
            <br />
            Technology
          </h1>
          <h4 className="HomePage__subtitle">
            {t('home.banner')}
          </h4>
          <button
            className="HomePage__btn"
            type="button"
            onClick={getStarted}
          >
            {t('H.Getstarted')}
            <span>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
        </div>
        <div className="HomePage__animation">
          <img
            className="HomePage__backgroundImg"
            src={image}
            alt="background"
          />
          <div className="HomePage__decoration HomePage__decoration--1" />
          <div className="HomePage__decoration HomePage__decoration--2" />
          <div className="HomePage__decoration HomePage__decoration--3" />
          {ellipses.map(ellipse => (
            <div
              key={ellipse}
              className={`HomePage__ellipse HomePage__ellipse--${ellipse}`}
            />
          ))}
          {apps.map(app => (
            <div key={app} className={`HomePage__app HomePage__app--${app}`} />
          ))}
        </div>
        <button
          type="button"
          className="HomePage__scroll"
          onClick={() => setScrollBtn(true)}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </section>
  );
};

HomePage.propTypes = {
  getStarted: PropTypes.func.isRequired,
};
