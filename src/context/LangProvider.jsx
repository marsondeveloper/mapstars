import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const LangContext = React.createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('Eng');

  const getLocalStorage = () => {
    if (localStorage.getItem('lang') !== null) {
      setLang(JSON.parse(localStorage.getItem('lang') || ''));
    }
  };

  const updateStorage = () => {
    if (lang !== 'Eng') {
      localStorage.setItem('lang', JSON.stringify(lang));
    } else {
      localStorage.removeItem('lang');
    }
  };

  const changeLanguage = (language) => {
    setLang(language);
  };

  const contextValue = {
    lang,
    changeLanguage,
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    updateStorage();
  }, [lang]);

  return (
    <LangContext.Provider value={contextValue}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
