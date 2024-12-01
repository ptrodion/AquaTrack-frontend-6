import css from './UserBar.module.css';
import { useState, useRef, useEffect } from 'react';
import { TbSettings } from 'react-icons/tb';
import { MdLogout } from 'react-icons/md';
import { LuUserCircle2 } from "react-icons/lu";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from '../../redux/user/selector';



// import  LogOutModal  from '../LogOutModal/LogOutModal.jsx';
import { UserSettingsModal } from 'components/UserSettingsModal/UserSettingsModal.jsx';
import ModalBackdrop from 'components/ModalBackdrop/ModalBackdrop';


const UserBar = ({ name, avatarUrl }) => {
  const { t } = useTranslation();
  const [showPopoverOpen, setShowPopoverOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isSettingModalOpen, setSettingModalOpen] = useState(false);
  // const [isLogOutModalOpen, setLogOutModalClose] = useState(false);
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


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

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     dispatch(fetchUser());
  //   }
  // }, [dispatch, isLoggedIn]);

  // const getInitials = (name, email) => {
  //   if (name) {
  //     return name.slice(0, 5).toUpperCase();
  //   } else if (email) {
  //     return email.slice(0, 5).toUpperCase();
  //   }
  //   return "";
  // };

  // const initials = getInitials(user?.name, user?.email);

  return (
    <div className={css.user_button_container}>
      {isLoggedIn ? (<button
        className={css.user_button}
        onClick={togglePopover}
        ref={buttonRef}
      >
        <span className={css.username}>{/*{user?.name || user?.email}*/}</span>
        <img
          src={avatarUrl}
          alt="Photo"
          className={css.avatar} />
          
        
        {/* Popover */}
        {showPopoverOpen ? (
          <BsChevronDown className={css.iconArrow} />
        ) : (
          <BsChevronUp className={css.iconArrow} />
        )}
      </button>) : (
          <div>
            <LuUserCircle2 className={ css.avatarIcon } />
          </div>
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

      {/* Модальное окно выхода */}
      {/* {isLogOutModalOpen &&
        (<ModalBackdrop>
          <LogOutModal
            isOpen={true}
            onClose={handleLogOutModalClose}
          />
        </ModalBackdrop>
        )} */}
      
    </div>
  );
}

export default UserBar;
