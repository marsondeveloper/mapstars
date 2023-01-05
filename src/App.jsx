import React, { useState, useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { LangProvider } from './context/LangProvider';
import { Header } from './components/Header/Header';
import { MainPages } from './components/MainPages';
import { GetStartedDialog } from './components/GetStartedDialog';
import { SheduleCall } from './components/SheduleCall';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Footer } from './components/Footer';
import './App.scss';
import './i18next';

const App = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const getOpenDialog = () => {
    setOpenDialog(true);
  };

  const getStarted = () => {
    getOpenDialog();
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const [sheduleCall, setSheduleCall] = useState(false);

  const orderCall = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setSheduleCall(true);
  };

  const closeOrderCall = () => {
    setSheduleCall(false);
  };

  const techRef = useRef(null);
  const advantagesRef = useRef(null);
  const howWorkRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <LangProvider>
      <div
        className={
          classNames(`App + ${openDialog || sheduleCall
            ? 'App--dialog'
            : ''
          }`)
        }
      >
        <Header
          techRef={techRef}
          advantagesRef={advantagesRef}
          howWorkRef={howWorkRef}
          packagesRef={packagesRef}
          contactRef={contactRef}
          getStarted={getStarted}
        />

        <main className="App__mainBlock">
          {openDialog && <GetStartedDialog closeDialog={closeDialog} />}
          {sheduleCall && <SheduleCall closeOrderCall={closeOrderCall} />}
          <Routes>
            <Route
              path="/"
              element={(
                <MainPages
                  getOpenDialog={getOpenDialog}
                  techRef={techRef}
                  advantagesRef={advantagesRef}
                  howWorkRef={howWorkRef}
                  packagesRef={packagesRef}
                  contactRef={contactRef}
                />
              )}
            />
            <Route
              path="/policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms"
              element={<TermsOfService />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer orderCall={orderCall} />
      </div>
    </LangProvider>
  );
};

export default App;
