import React from 'react';
import './PrivacyPolicy.scss';
import { useTranslation } from 'react-i18next';

export const PrivacyPolicy = () => {

  const { t } = useTranslation();

  return (
    <section className="PrivacyPolicy App__section">
      <h2 className="PrivacyPolicy__title">{t('Footer.text1')}</h2>
      <div className="PrivacyPolicy__content">
        <p className="PrivacyPolicy__info">
           {t('PrivacyPolicy.text1')}
        </p>
        <p className="PrivacyPolicy__info">
           {t('PrivacyPolicy.text2')}
        </p>
      </div>
    </section>
  );
} 



