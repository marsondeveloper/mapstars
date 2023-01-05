import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from '../../images/logo.svg';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

export const Footer = ({ orderCall }) => {
  const [menuOpen] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const { t } = useTranslation();

  return (
    <footer className="Footer">
      <NavLink
        to="/"
        onClick={() => handleScroll()}
      >
        <img
          className="Footer__logo"
          src={logo}
          alt="logo"
        />
      </NavLink>

      <nav
        className={
          classNames(`Footer__nav + ${menuOpen
            ? 'Footer__nav--open'
            : ''
          }`)
        }
      >
        <ul className="Footer__nav-ul">
          <li className="Footer__nav-li">
            <Link
              to="/policy"
              className="Footer__link"
              onClick={() => handleScroll()}
            >
              {t('Footer.text1')}
            </Link>
          </li>
          <li className="Footer__nav-li">
            <Link
              to="/terms"
              className="Footer__link"
              onClick={() => handleScroll()}
            >
              {t('Footer.text2')}
            </Link>
          </li>
          <li className="Footer__nav-li">
            <Link
              to="/"
              className="Footer__link"
              onClick={() => orderCall()}
            >
              {t('Footer.text3')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="Footer__social-links">
        <a
          className="Footer__social-link Footer__social-link--facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--twitter"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
        <a
          className="Footer__social-link Footer__social-link--linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          .
        </a>
      </div>
      <div className="Footer__powered">
			<div className="Footer__powered-txt">{t('Footer.dev')}</div>
			<a href="https://promodex.agency" target="_blank" className="Footer__powered__logo" rel="nofollow">promodex</a>
		</div>
    </footer>
  );
};

Footer.propTypes = {
  orderCall: PropTypes.func.isRequired,
};
