import { useCallback } from "react";
import css from "./AddWaterBtn.module.css";
import { useModalContext } from "../../context/ModalProvider";
import svg from "../../assets/icons/sprite.svg";
import WaterModal from "../WaterModal/WaterModal";
import { useTranslation } from "react-i18next";
import { parseDateTime } from "../../helpers/parseDate";
import { useParams } from "react-router-dom";

const AddWaterBtn = () => {
  const { setModal, closeModal } = useModalContext();
  const { t } = useTranslation();
  const { date: dateUrl } = useParams();
  const timestampFromUrl = parseDateTime(dateUrl);

  const openModal = useCallback(() => {
    setModal(
      <WaterModal
        onClose={closeModal}
        operationType="add"
        timestampFromUrl={timestampFromUrl}
      />
    );
  }, [setModal, closeModal, timestampFromUrl]);

  return (
    <button
      type="button"
      className={css.btnStyle}
      onClick={openModal}
    >
      <svg className={css.iconStyle}>
        <use xlinkHref={svg + "#icon-plus"} />
      </svg>
      {t("addWaterBtn.addWater")} 
    </button>
  );
};

export default AddWaterBtn;