import React from "react";
import { useTranslation } from "react-i18next";
import css from "./LogOutModal.module.css";
import svg from "../../assets/icons/sprite.svg";
import BtnLogout from "../BtnLogout/BtnLogout.jsx";
import LoaderComponent from "../LoaderComponent/LoaderComponent.jsx";
import ModalBackdrop from "../ModalBackdrop/ModalBackdrop"; // Імпортуємо ModalBackdrop
import { useSelector } from "react-redux";
import { selectUserIsLoadong } from "../../redux/user/selector.js";

const ModalLogout = ({ onClose }) => {
  const { t } = useTranslation();
  const isLoading = useSelector(selectUserIsLoadong);

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalBackdrop onClose={handleClose}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label={t("logOutModal.ariaClose")}
          onClick={handleClose}
          className={css.closeBtn}
        >
          <svg className={css.svg}>
            <use xlinkHref={svg + "#icon-x"}></use>
          </svg>
        </button>
        <div className={css.modalTextBox}>
          <h2 className={css.modalTitle}>{t("logOutModal.logOut")}</h2>
          <p className={css.modalText}>{t("logOutModal.confirm")}</p>
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
                {t("logOutModal.close")}
              </button>
            </>
          )}
        </div>
      </div>
    </ModalBackdrop>
  );
};

export default ModalLogout;
