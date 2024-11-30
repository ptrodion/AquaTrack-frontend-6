import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from './DeleteWaterModal.module.css';
import ModalWindow from "../ModalWindow/ModalWindow";
import {
    updateWaterRecord,
    deleteWaterRecord,
    getDailyWaterRecords,
    getMonthlyWaterRecords,
} from '../../redux/water/operatioms';
import { useDispatch, useSelector } from "react-redux";
import { updateWaterRecord } from '../../redux/water/selector';
import { Notify } from "notiflix";
import Loader from "../Loader/Loader";

const DeleteWaterModal = ({
    isOpen,
    closeModal,
    id,
    isLoading,
    setIsLoading,
}) => {
    const chosenDate = useSelector(updateWaterRecord);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            setIsLoading(true);
            closeModal();

            //видалення
             await dispatch(delWater(id));
      const [chosenFullDate] = chosenDate.split('T');
      const [chosenYear, chosenMonth, chosenDay] = chosenFullDate.split('-');

      //оновлюємо список випитої за день
      const fullDate = `${chosenYear}-${chosenMonth}-${chosenDay}`;
      await dispatch(getDaily(fullDate));

      await dispatch(getTodayWater());

      //оновлюємо випиту воду за місяць
      const date = `${chosenYear}-${chosenMonth}`;
      await dispatch(getMonthly(date));
    } catch (error) {
      setIsLoading(false);
      Notify.failure('Failed to delete record');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
        <div className={styles.modalContainer}>
          <h2 className={styles.title}>Delete entry</h2>
          <p className={styles.question}>
            Are you sure you want to delete the entry?
          </p>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={handleDelete}
              className={`${styles.commonBtn} ${styles.deleteBtn}`}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={closeModal}
              className={`${styles.commonBtn} ${styles.cancelBtn}`}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

export default DeleteWaterModal;