// import { useState } from 'react';
import { GoX } from 'react-icons/go';
import css from '../UserSettingsForm/UserSettingsForm.module.css';
import { UserSettingsForm } from 'components/UserSettingsForm/UserSettingsForm.jsx';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher.jsx';

export const UserSettingsModal = ({ onSettingModalClose }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    onSettingModalClose();
  };

  return (
    <div className={css.container}>
      <div className={css.modal}>
        <div className={css.modalBox}>
          <div className={css.box}>
            <h2 className={css.title}>{t('settingsModal.titleModal')}</h2>
            <button onClick={handleClick}>
              <GoX />
            </button>
          </div>

          {/* <div className={css.lang}>
           <LanguageSwitcher />
          </div> */}

          <UserSettingsForm onSettingModalClose={onSettingModalClose} />
        </div>
      </div>
    </div>
  );
};
