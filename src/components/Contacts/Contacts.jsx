import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import { useTranslation } from 'react-i18next';

export const Contacts = ({ getStarted, contactRef }) => {

  const { t } = useTranslation();
  return (
  <section className="Contacts App__section" ref={contactRef}>
  <h2 className="Contacts__subtitle">{t('Contacts.text1')}</h2>
  <h1 className="Contacts__title">
  {t('Contacts.text2')}
  </h1>
  <div className="Contacts__contacts">
    <button
      className="Contacts__btn"
      type="button"
    >
      <a
        className="Contacts__link"
        href="tel:+351 913 448 547"
        rel="noopener noreferrer"
      >
        +351 913 448 547
      </a>
    </button>
    <button className="Contacts__btn" type="button">
      <a
        className="Contacts__link Contacts__link--telegram"
        href="https://t.me/mapstars"
        target="_blank"
        rel="noopener noreferrer"
      >
        mapstars
      </a>
    </button>
    <button className="Contacts__btn" type="button">
      <a
        className="Contacts__link"
        href="mailto:info@mapstars.pt"
        target="_blank"
        rel="noopener noreferrer"
      >
        info@mapstars.pt
      </a>
    </button>
  </div>
  <button
    className="Contacts__get-started Contacts__get-started--blur"
    type="button"
  />
  <button
    className="Contacts__get-started"
    type="button"
    onClick={() => getStarted()}
  >
    {t('H.Getstarted')}
  </button>
</section>
);
}

  

Contacts.propTypes = {
  getStarted: PropTypes.func.isRequired,
  contactRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
