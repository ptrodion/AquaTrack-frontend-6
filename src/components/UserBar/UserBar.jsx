import css from './UserBar.module.css';
import { useState, useRef } from 'react';
import { TbSettings } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { FaRegCircleUser } from "react-icons/fa6";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';


import  ModalLogOut  from '../LogOutModal/LogOutModal.jsx';
import { UserSettingsModal } from 'components/UserSettingsModal/UserSettingsModal.jsx';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';


const UserBar = ({ user }) => {
  const { t } = useTranslation();
  const [showPopoverOpen, setShowPopoverOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isSettingModalOpen, setSettingModalOpen] = useState(false);
  const [isLogOutModalOpen, setLogOutModalOpen] = useState(false);


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

  const onLogOutModalOpen = () => {
    setLogOutModalOpen(true);
    setShowPopoverOpen(false);
  };

  const onLogOutModalClose = () => {
    setLogOutModalOpen(false);
  }


  return (
    <div className={css.user_button_container}>
      {user && (<button
        className={css.user_button}
        onClick={togglePopover}
        ref={buttonRef}
      >
        <span className={css.username}>
          {(user?.name || user?.email)?.slice(0, 6)
            .charAt(0).toUpperCase() + (user?.name || user?.email)?.slice(1, 6)}
        </span>

        {/* проверка аватара */}
        {user.avatarUrlCloudinary ? (
      <img
        src={user.avatarUrlCloudinary}
        alt="Photo"
        className={css.avatar}
      />
    ) : (
      <FaRegCircleUser className={css.avatarIcon} />
    )}


        {/* Popover */}
        {showPopoverOpen ? (
          <BsChevronDown className={css.iconArrow} />
        ) : (
          <BsChevronUp className={css.iconArrow} />
        )}
      </button>
          )}


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
          onClick={onLogOutModalOpen}
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

      {/* Модальное окно выхода */}
       {isLogOutModalOpen &&
        (
          <ModalLogOut
            isOpen={onLogOutModalOpen}
            onClose={onLogOutModalClose}
          />
         
        )}
      
    </div>
  );
}

export default UserBar;
