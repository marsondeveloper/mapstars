import React from 'react';
import './TermsOfService.scss';
import { useTranslation } from 'react-i18next';


export const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <section className="PrivacyPolicy App__section">
      <h2 className="TermsOfService__title">{t('TermsOfService.text3')}</h2>
      <div className="TermsOfService__content">
        <p className="TermsOfService__info">
          {t('TermsOfService.text1')}
        </p>
        <p className="TermsOfService__info">
          {t('TermsOfService.text2')}
        </p>
      </div>
    </section>
  );
}


