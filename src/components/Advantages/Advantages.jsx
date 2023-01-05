import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import advantagesEng from '../../api/advantageEng.json';
import advantagesRus from '../../api/advantageRus.json';
import advantagesUkr from '../../api/advantageUkr.json';
import advantagesGer from '../../api/advantageGer.json';
import './Advantages.scss';
import { useTranslation } from 'react-i18next';

export const Advantages = ({ advantagesRef }) => {

  const { t } = useTranslation();

  const arr = useTranslation();

  let advantages;
  
  if (arr.i18n.language == 'Eng') {
    advantages = advantagesEng;
  } else if (arr.i18n.language == 'Rus') {
    advantages = advantagesRus;
  } else if (arr.i18n.language == 'Ukr') {
    advantages = advantagesUkr;
  } else if (arr.i18n.language == 'Ger') {
    advantages = advantagesGer;
  }


  
  return (
    <section className="Advantages App__section" ref={advantagesRef}>
      <Fade delay={300} bottom>
        <h2 className="Advantages__title">
           {t('Advantages.text1')}
        </h2>
      </Fade>
      <ul className="Advantages__list"
      >
        
        {advantages.map((advantage, index) => (
          <Fade key={index} right delay={advantage.number * 300}>
            <li className="Advantages__block">
              <div className={`Advantages__logo Advantages__logo--${advantage.number}`}
              />
              <h4 className="Advantages__block-name">{advantage.name}</h4>
              <p className="Advantages__block-info">{advantage.description}</p>
            </li>
          </Fade>
        ))}

      </ul>
    </section>
  );
}





Advantages.propTypes = {
  advantagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
