// import { useState } from 'react';
import { GoX } from 'react-icons/go';
import css from '../UserSettingsForm/UserSettingsForm.module.css';
import { UserSettingsForm } from 'components/UserSettingsForm/UserSettingsForm.jsx';

export const UserSettingsModal = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleSubmit = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div className={css.modal}>
      <div className={css.box}>
        <h2 className={css.title}>Settings</h2>
        <GoX />
      </div>
      <UserSettingsForm/>
    </div>
  );
};