import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './GetStartedDialog.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


export const GetStartedDialog = ({ closeDialog }) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const [isAccept, setIsAccept] = useState(false);

  const { t } = useTranslation();

  const onSubmit = async() => {
    const data = {
      name: getValues('name'),
      email: getValues('email'),
      message: getValues('message'),
      id: +new Date()
    };

    try {
      await axios.post("http://localhost:4000/send_mail", {
        data
      })
    } catch (error) {
      console.error(error)
    }

    setIsAccept(true);
    reset();
    setTimeout(() => {
      setIsAccept(false);
    }, 3000);
}
    

   // send Message to API //

  return (
    <div className="GetStartedDialog">
      <button
        type="button"
        className="GetStartedDialog__close"
        onClick={() => closeDialog()}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="GetStartedDialog__name">{t('getStarted.text1')}</p>
      <h2 className="GetStartedDialog__title">{t('getStarted.text2')}</h2>
      <form
        
        className="GetStartedDialog__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <input
              type="text"
              className="GetStartedDialog__input"
              {...register('name', {
                required: 'Field is mandatory',
                minLength: {
                  value: 2,
                  message: 'The minimum number of characters in the name is 2',
                },
                pattern: {
                  message: 'Please enter valid name',
                },
              })}
              placeholder="First Name*"
            />
          </label>
          <div className="GetStartedDialog__errorBlock">
            {errors?.name && (
              errors?.name.message
            )}
          </div>
        </div>
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <input
              className="GetStartedDialog__input"
              type="email"
              placeholder="E-mail*"
              {...register('email', {
                required: 'Field is mandatory',
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: 'Please enter valid email',
                },
              })}
            />
          </label>
          <div className="GetStartedDialog__errorBlock">
            {errors?.email && (
              errors?.email.message
            )}
          </div>
        </div>
        <div className="GetStartedDialog__formEl">
          <label className="GetStartedDialog__label">
            <textarea
              className="GetStartedDialog__textArea"
              placeholder="Message..."
              name="message"
              {...register('message')}
            />
          </label>
        </div>
        <button
          type="submit"
          className="GetStartedDialog__btn"
          disabled={!isValid}
        >
          {t('getStarted.text3')}
        </button>
      </form>
      {isAccept && (
        <p className="GetStartedDialog__accept">
          {t('getStarted.text4')}
        </p>
      )}
    </div>
  );
};

GetStartedDialog.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};
