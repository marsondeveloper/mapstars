import React from 'react';
import PropTypes from 'prop-types';
import packagesEng from '../../api/packagesEng.json';
import packagesRus from '../../api/packagesRus.json';
import packagesUkr from '../../api/packagesUkr.json';
import packagesGer from '../../api/packagesGer.json';
import './Packages.scss';
import { useTranslation } from 'react-i18next';

export const Packages = ({ getStarted, packagesRef }) => {

  const { t } = useTranslation();

  const arr = useTranslation();

  let packages;
  
  if (arr.i18n.language == 'Eng') {
    packages = packagesEng;
  } else if (arr.i18n.language == 'Rus') {
    packages = packagesRus;
  } else if (arr.i18n.language == 'Ukr') {
    packages = packagesUkr;
  } else if (arr.i18n.language == 'Ger') {
    packages = packagesGer;
  }

  return (
    <section className="Packages" ref={packagesRef}>
      <h2 className="Packages__title">{t('Packages.text1')}</h2>
      <ul className="Packages__packages">
        {packages.map(pack => (
          <li key={pack.name} className="Packages__package">
            <div className={`Packages__package-top Packages__package-top--${pack.name}`}>
              <h4 className="Packages__package-name">{pack.title}</h4>
              <p className="Packages__package-whom">{pack.whom}</p>
            </div>
            <h3 className="Packages__includes">{t('Packages.text2')}</h3>
            <ul className="Packages__options">
              {pack.includes.map(option => (
                <li
                  key={option}
                  className="Packages__option"
                >
                  {option}
                </li>
              ))}
            </ul>
            <button
              className="Packages__btn"
              type="button"
              onClick={() => getStarted()}
            >
              {t('H.Getstarted')}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}








Packages.propTypes = {
  getStarted: PropTypes.func.isRequired,
  packagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
