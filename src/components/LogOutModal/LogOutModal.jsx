/* import ModalWindow from "../ModalWindow/ModalWindow";
import { useDispatch } from "react-redux";
import styles from './LogOutModal.module.css';
import { logout } from "../../redux/auth/operations";

const LogOutModal = ({ isOpen, closeModal }) => {
    const dispatch = useDispatch();


const handleLogOut = async () => {
    dispatch(logout());
    closeModal();
};

return (
    <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
        <div className={styles.modalContainer}>
            <h2 className={styles.title}>Log Out</h2>
            <p className={styles.question}>Do you really want to leave?</p>
            <div className={styles.buttonContainer}>
                <button
                    type='button'
                    onClick={handleLogOut}
                    className={`${styles.commonBtn} ${styles.deleteBtn}`}
                >
                    Log Out
                </button>
                <button
                    type='button'
                    onClick={closeModal}
                    className={`${styles.commonBtn} ${styles.cancelBtn}`}
                >
                    Cancel
                </button>
            </div>
        </div>
    </ModalWindow>
)

}

export default LogOutModal; */




import { useTranslation } from "react-i18next";
import css from "./LogOutModal.module.css";
import svg from "../../assets/icons/sprite.svg";
import BtnLogout from "../BtnLogout/BtnLogout.jsx";
import { ANIMATION } from "../../constants.js";
import { useSelector } from "react-redux";
import { selectUserIsLoadong } from "../../redux/user/selector.js";
import LoaderComponent from "../LoaderComponent/LoaderComponent.jsx";

const ModalLogout = ({ onClose }) => {
  const { t } = useTranslation();
  const isLoading = useSelector(selectUserIsLoadong);

  const handleClose = () => {
    const id = setTimeout(() => {
      onClose();
      clearTimeout(id);
    }, ANIMATION.DURATION);
  };

  return (
    <div className={css.modal}>
      <button
        type="button"
        aria-label={t("closeLogOutModal")}
        onClick={handleClose}
        className={css.closeBtn}
      >
        <svg className={css.svg}>
          <use xlinkHref={svg + "#icon-x"}></use>
        </svg>
      </button>
      <div className={css.modalTextBox}>
        <h2 className={css.modalTitle}>{t("logout")}</h2>
        <p className={css.modalText}>{t("confirmLogout")}</p>
      </div>
      <div className={css.modalBtnBox}>
        {isLoading ? (
          <LoaderComponent height={80} width={80} />
        ) : (
          <>
            <BtnLogout handleClose={handleClose} />
            <button
              type="button"
              onClick={handleClose}
              className={css.btnCancel}
            >
              {t("cancel")}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalLogout;