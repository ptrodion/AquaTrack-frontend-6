import css from './UserBar.module.css';
import { useState, useRef } from 'react';
import { TbSettings } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


// import { useDispatch } from "react-redux";
// import { selectUser } from '../../redux/auth/selector';

// import { LogOutModal } from '../LogOutModal/LogOutModal.jsx';
import { UserSettingsModal } from 'components/UserSettingsModal/UserSettingsModal.jsx';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';


const UserBar = ({ name, avatarUrl }) => {
  const { t } = useTranslation();
  const [showPopoverOpen, setShowPopoverOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isSettingModalOpen, setSettingModalOpen] = useState(false);
  // const [isLogOutModalOpen, setLogOutModalClose] = useState(false);

  const togglePopover = () => {
    setShowPopoverOpen(!showPopoverOpen);
  };

  const onSettingModalOpen = () => {
    setSettingModalOpen(true);
    setShowPopoverOpen(false);
  };

  const onSettingModalClose = () => {
    setSettingModalOpen(false);
  };

  // const onLogOutModalOpen = () => {
  //   setLogOutModalOpen(true);
  //   setShowPopoverOpen(false);
  // };

  // const onLogOutModalClose = () => {
  //   isLogOutModalOpen(false);
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
              onClick={onSettingModalOpen}
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
              // onClick={isLogOutModalOpen}
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
      {isSettingModalOpen && 
        (<ModalBackdrop>
          <UserSettingsModal
        onSettingModalClose={onSettingModalClose}
        />
        </ModalBackdrop>
       )}

      {/* Модальное окно выхода
      <UserLogOutModal
        isOpen={showLogOutModal}
        onClose={handleLogOutModalClose}
      /> */}
      
    </div>
  );
};


export default UserBar;
