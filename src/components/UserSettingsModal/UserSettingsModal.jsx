// import { useState } from 'react';
import { GoX } from 'react-icons/go';
import css from '../UserSettingsForm/UserSettingsForm.module.css';
import { UserSettingsForm } from 'components/UserSettingsForm/UserSettingsForm.jsx';

export const UserSettingsModal = (onClose) => {

  return (
    <div className={css.container}>
    <div className={css.modal}>
      <div className={css.box}>
        <h2 className={css.title}>Settings</h2>
        <button onClick={onClose}><GoX/></button>
      </div>
      <UserSettingsForm onClose={onClose}/>
    </div>
    </div>
  );
};