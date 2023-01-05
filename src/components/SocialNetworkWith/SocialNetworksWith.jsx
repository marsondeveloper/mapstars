import React from 'react';
import Fade from 'react-reveal/Fade';
import image from '../../images/networks.png';
import './SocialNetworksWith.scss';
import { useTranslation } from 'react-i18next';

export const SocialNetworksWith = () => {

  const { t } = useTranslation();

 return (
    <section className="SocialNetworksWith App__section">
      <div className="SocialNetworksWith__images">
        <img
          className="SocialNetworksWith__img"
          src={image}
          alt="girl with phone"
        />
      </div>
      <div className="SocialNetworksWith__content">
        <Fade delay={300} bottom>
          <h2 className="SocialNetworksWith__title">
            <span className="SocialNetworksWith__title--span">
            {t('SocialNetworks.text1')} &nbsp;
            </span>
            {t('SocialNetworks.text2')}
          </h2>
        </Fade>
        <p className="SocialNetworksWith__info">
            {t('SocialNetworks.text3')}
        </p>
        <p className="SocialNetworksWith__info">
           {t('SocialNetworks.text4')}
        </p>
        <p className="SocialNetworksWith__info">
           {t('SocialNetworks.text5')}
        </p>
        <p className="SocialNetworksWith__info">
           {t('SocialNetworks.text6')}
        </p>
        <p className="SocialNetworksWith__info SocialNetworksWith__info--main">
           {t('SocialNetworks.text7')}
        </p>
      </div>
    </section>
  );
}







