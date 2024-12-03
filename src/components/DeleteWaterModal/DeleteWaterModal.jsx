// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import styles from './DeleteWaterModal.module.css';
// import ModalWindow from "../ModalWindow/ModalWindow";
// import {
//     updateWaterRecord,
//     deleteWaterRecord,
//     getDailyWaterRecords,
//     getMonthlyWaterRecords,
// } from '../../redux/water/operatioms';
// import { useDispatch, useSelector } from "react-redux";
// import { updateWaterRecord } from '../../redux/water/selector';
// import { Notify } from "notiflix";
// import Loader from "../Loader/Loader";

// const DeleteWaterModal = ({
//     isOpen,
//     closeModal,
//     id,
//     isLoading,
//     setIsLoading,
// }) => {
//     const chosenDate = useSelector(updateWaterRecord);
//     const dispatch = useDispatch();

//     const handleDelete = async () => {
//         try {
//             setIsLoading(true);
//             closeModal();

//             //видалення
//              await dispatch(delWater(id));
//       const [chosenFullDate] = chosenDate.split('T');
//       const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

//       //оновлюємо список випитої за день
//       const fullDate = `${chosenYear}-${chosenMonth}-${chosenDay}`;
//       await dispatch(getDaily(fullDate));

//       await dispatch(getTodayWater());

//       //оновлюємо випиту воду за місяць
//       const date = `${chosenYear}-${chosenMonth}`;
//       await dispatch(getMonthly(date));
//     } catch (error) {
//       setIsLoading(false);
//       Notify.failure('Failed to delete record');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
//         <div className={styles.modalContainer}>
//           <h2 className={styles.title}>Delete entry</h2>
//           <p className={styles.question}>
//             Are you sure you want to delete the entry?
//           </p>
//           <div className={styles.buttonContainer}>
//             <button
//               type="button"
//               onClick={handleDelete}
//               className={`${styles.commonBtn} ${styles.deleteBtn}`}
//             >
//               Delete
//             </button>
//             <button
//               type="button"
//               onClick={closeModal}
//               className={`${styles.commonBtn} ${styles.cancelBtn}`}
//               disabled={isLoading}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </ModalWindow>
//     </>
//   );
// };

// export default DeleteWaterModal;






import svg from "../../assets/icons.svg";
import css from "./DeleteWaterModal.module.css";
import BtnDelete from "../BtnDelete/BtnDelete.jsx";
import { ANIMATION } from "../../constants.js";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWater } from "../../redux/water/operations.js";
import LoaderComponent from "../LoaderComponent/LoaderComponent.jsx";

const ModalDeleteEntry = ({ id, onClose }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    const id = setTimeout(() => {
      onClose();
      clearTimeout(id);
    }, ANIMATION.DURATION);
  };

  const handleDelete = () => {
    setIsLoading(() => true);
    dispatch(deleteWater(id)).then(({ error }) => {
      if (!error) {
        handleClose();
      }
      setIsLoading(false);
    });
  };

  return (
    <div className={css.modal}>
      <button
        type="button"
        aria-label={t("closeDeleteEntryModal")}
        onClick={handleClose}
        className={css.closeBtn}
      >
        <svg className={css.svg}>
          <use xlinkHref={svg + "#icon-x"}></use>
        </svg>
      </button>
      <div className={css.modalTextBox}>
        <h2 className={css.modalTitle}>{t("deleteEntry")}</h2>
        <p className={css.modalText}>{t("confirmDeleteEntry")}</p>
      </div>
      <div className={css.modalBtnBox}>
        {isLoading ? (
          <LoaderComponent height={80} width={80} />
        ) : (
          <>
            <BtnDelete handleDelete={handleDelete} id={id} />
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

export default ModalDeleteEntry;