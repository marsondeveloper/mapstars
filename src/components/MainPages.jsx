import React from 'react';
import PropTypes from 'prop-types';

import { HomePage } from './HomePage';
import { Technology } from './Technology';
import { Advantages } from './Advantages/Advantages';
import { HowWork } from './HowWork';
import { Services } from './Services';
import { Packages } from './Packages';
import { Examples } from './Examples';
import { Awards } from './Awards/Awards';
import { UsefulInfo } from './UsefulInfo';
import { SocialNetworksWith } from './SocialNetworkWith';
import { SettingUp } from './SettingUp';
import { Contacts } from './Contacts';

import '../App.scss';

export const MainPages = ({
  getOpenDialog,
  techRef,
  advantagesRef,
  howWorkRef,
  packagesRef,
  contactRef,
}) => {
  const getStarted = () => {
    getOpenDialog();
  };

  return (
    <div className="MainPages">
      <HomePage getStarted={getStarted} />
      <Technology techRef={techRef} />
      <Advantages advantagesRef={advantagesRef} />
      <HowWork howWorkRef={howWorkRef} />
      <Services />
      <UsefulInfo />
      <SocialNetworksWith />
      <Packages getStarted={getStarted} packagesRef={packagesRef} />
      <Examples />
      <Awards />
      <SettingUp />
      <Contacts getStarted={getStarted} contactRef={contactRef} />
    </div>
  );
};

MainPages.propTypes = {
  getOpenDialog: PropTypes.func.isRequired,
  techRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  advantagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  howWorkRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  packagesRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  contactRef: PropTypes.oneOfType([
    PropTypes.func, // for legacy refs
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};
