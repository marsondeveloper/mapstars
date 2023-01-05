import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './SheduleCall.scss';

export const SheduleCall = ({ closeOrderCall }) => {
  const {
    register,
    handleSubmit,
    // getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const [isAccept, setIsAccept] = useState(false);

  const onSubmit = () => {
    // const newMessage = {
    //   name: getValues('name'),
    //   email: getValues('email'),
    //   message: getValues('message'),
    //   id: +new Date(),
    // };

    // send Message to API //
    // export const postNewMessage = async (message) => {
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       message,
    //     }),
    //   });

    //   return response.json();
    // };
    // postNewMessage(message);

    setIsAccept(true);
    reset();
    setTimeout(() => {
      setIsAccept(false);
    }, 3000);
  };

  return (
    <div className="SheduleCall">
      <button
        type="button"
        className="SheduleCall__close"
        onClick={() => closeOrderCall()}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="SheduleCall__name">Contact Form</p>
      <h2 className="SheduleCall__title">Leave us your contact details.</h2>
      <form
        method="dialog"
        className="SheduleCall__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="SheduleCall__formEl">
          <label className="SheduleCall__label">
            <input
              type="text"
              className="SheduleCall__input"
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
          <div className="SheduleCall__errorBlock">
            {errors?.name && (
              errors?.name.message
            )}
          </div>
        </div>
        <div className="SheduleCall__formEl">
          <label className="SheduleCall__label">
            <input
              className="SheduleCall__input"
              type="tel"
              placeholder="Phone*"
              {...register('phone', {
                required: 'Field is mandatory',
                pattern: {
                  value: /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                  message: 'Please enter valid phone',
                },
                minLength: {
                  value: 19,
                  message: 'Invalid recording format',
                },
              })}
            />
          </label>
          <div className="SheduleCall__errorBlock">
            {errors?.email ? (
              errors?.email.message
            ) : (
              '+38 (099) 000-00-00'
            )}
          </div>
        </div>
        <button
          type="submit"
          className="SheduleCall__btn"
          disabled={!isValid}
        >
          Send
        </button>
      </form>
      {isAccept && (
        <p className="SheduleCall__accept">
          Your application is accepted!
        </p>
      )}
    </div>
  );
};

SheduleCall.propTypes = {
  closeOrderCall: PropTypes.func.isRequired,
};
