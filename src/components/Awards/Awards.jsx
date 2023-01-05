import React from 'react';
import Fade from 'react-reveal/Fade';
import './Awards.scss';
import { useTranslation } from 'react-i18next';

export const Awards = () => {
  const awards = [];

  for (let i = 1; i <= 8; i += 1) {
    awards.push(i);
  }

  const { t } = useTranslation();

  return (
    <section className="Awards App__section">
      <Fade delay={300} bottom>
        <h2 className="Awards__title">{t('awards.text1')}</h2>
      </Fade>
      <p className="Awards__subtitle">
      {t('awards.text2')}
      </p>
      <div className="Awards__companies">
        {awards.map(award => (
          <Fade key={award} right delay={award * 300}>
            <div className={`Awards__company Awards__company--${award}`} />
          </Fade>
        ))}
      </div>
    </section>
  );
};
