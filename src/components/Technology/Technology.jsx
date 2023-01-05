import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './Technology.scss';
import { useTranslation } from 'react-i18next';

export const Technology = ({ techRef }) => {
  const images = [];

  for (let i = 1; i <= 4; i += 1) {
    images.push(i);
  }

  const { t } = useTranslation();

  return (
    <section className="Technology App__section" ref={techRef}>
      <div className="Technology__images">
        {images.map(img => (
          <div
            key={img}
            className={`Technology__img Technology__img--${img}`}
          />
        ))}
      </div>
      <div className="Technology__content">
        <Fade delay={800} bottom>
          <h2 className="Technology__title">
            {t('H.Technology')}
          </h2>
        </Fade>
        <Fade delay={1200} bottom>
          <div className="Technology__infoBlock">
            <p className="Technology__subtitle">
              {t('Technology.text1')}
            </p>
            <p className="Technology__info">
              {t('Technology.text2')}
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

Technology.propTypes = {
  techRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
