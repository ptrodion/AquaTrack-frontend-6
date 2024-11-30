import css from './UserBar.module.css';
import { useState, useRef } from 'react';
import { TbSettings } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import { UserSettingsModal } from 'components/UserSettingsModal/UserSettingsModal.jsx';


const UserBar = ({ name, avatarUrl }) => {
  const { t } = useTranslation();
  const [showPopoverOpen, setShowPopoverOpen] = useState(false);
  const buttonRef = useRef(null);
  const [showModalSettings, setShowModalSettings] = useState(false);
  // const [showLogOutModal, setShowLogOutmodal] = useState(false);

  const togglePopover = () => {
    setShowPopoverOpen(!showPopoverOpen);
  };

  const handleSettingsModal = () => {
    setShowModalSettings(true);
    setShowPopoverOpen(false);
  };

  const handleSettingsModalClose = () => {
    setShowModalSettings(false);
}

  // const handleLogOut = () => {
  //   setShowLogOutmodal(true);
  //   setShowPopoverOpen(false);
  // };

  // const handleLogOutModalClose = () => {
  //   setShowLogOutmodal(false);
  // }

  return (
    <div className={css.user_button_container}>
      <button
        className={css.user_button}
        onClick={togglePopover}
        ref={buttonRef}
      >
        <span className={css.username}>{name}</span>
        <img src={avatarUrl} alt="#" className={css.avatar} />
        {showPopoverOpen ? (
          <BsChevronDown className={css.iconArrow} />
        ) : (
          <BsChevronUp className={css.iconArrow} />
        )}
      </button>

      {/* Всплывающее окно (popover) */}
      {showPopoverOpen && (
        <div className={css.popover}>
          <button
            type="button"
              className={css.inPopover}
              onClick={handleSettingsModal}
          >
            <div className={css.icon_setting}>
              <TbSettings />
            </div>
            <span className={css.buttonSetting}>
              {t('userBarPopover.setting')}
            </span>
          </button>

          <button
              type="button"
              className={css.inPopoverLogOut}
              // onClick={handleLogOut}
          >
            <div className={css.icon_logout}>
              <MdLogout />
            </div>
            <span className={css.buttonLogOut}>
              {t('userBarPopover.logout')}
            </span>
          </button>
        </div>
      )}

      {/* Модальное окно настроек */}
      {showModalSettings && <UserSettingsModal
        isOpen={showModalSettings}
        onClose={handleSettingsModalClose}
      />
       }

      {/* Модальное окно выхода
      <UserLogOutModal
        isOpen={showLogOutModal}
        onClose={handleLogOutModalClose}
      /> */}
      
    </div>
  );
};

export default UserBar;
