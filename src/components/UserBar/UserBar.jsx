import css from "./UserBar.module.css";
import { useState, useRef } from 'react';
import { TbSettings } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { BsChevronUp } from "react-icons/bs";




const UserBar = ({ name, avatarUrl }) => {
    const [showPopover, setShowPopover] = useState(true);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <div className={css.user_button_container}>
            <button className={css.user_button} onClick={togglePopover} ref={buttonRef}>
                <span className={css.username}>{name}</span>
              <img src={avatarUrl} alt="#" className={css.avatar} />
              <BsChevronUp className={css.iconArrow} />
                
      </button>

      { /* Всплывающее окно (popover) */ }
      {showPopover && (
              <div className={css.popover}>
                  <button type="button" className={css.inPopover}>
                    <TbSettings className={css.icon_setting} />
                      <span className={css.buttonSetting}>Setting</span>
                  </button>
                  <button type="button" className={css.inPopover}>
                    <MdLogout className={css.icon_logout} />
                    <span className={css.buttonLogOut}>Log out</span></button>
        </div>
      )}
    </div>
  );
}

export default UserBar