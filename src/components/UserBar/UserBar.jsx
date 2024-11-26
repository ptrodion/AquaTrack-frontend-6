import css from "./UserBar.module.css";
import { useState, useRef } from 'react';
import { TbSettings } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { BsChevronUp, BsChevronDown  } from "react-icons/bs";





const UserBar = ({ name, avatarUrl }) => {
    const [showPopoverOpen, setShowPopoverOpen] = useState(false);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopoverOpen(!showPopoverOpen);
  };

  return (
    <div className={css.user_button_container}>
            <button className={css.user_button} onClick={togglePopover} ref={buttonRef}>
                <span className={css.username}>{name}</span>
                <img src={avatarUrl} alt="#" className={css.avatar} />
                {showPopoverOpen ? (
          <BsChevronDown className={css.iconArrow} />
        ) : (
          <BsChevronUp className={css.iconArrow} />
        )}
                
      </button>

      { /* Всплывающее окно (popover) */ }
      {showPopoverOpen && (
              <div className={css.popover}>
                  <button type="button" className={css.inPopover}>
                    <div className={css.icon_setting}><TbSettings  /></div>
                    <span className={css.buttonSetting}>Setting</span>
                  </button>
                  <button type="button" className={css.inPopoverLogOut}>
                    <div className={css.icon_logout}><MdLogout /></div>
                    <span className={css.buttonLogOut}>Log out</span>
                  </button>
        </div>
      )}
    </div>
  );
}

export default UserBar