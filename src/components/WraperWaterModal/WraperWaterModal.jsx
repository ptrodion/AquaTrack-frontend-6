import { useModal } from "../../hooks/useModal.js";
import { useCallback } from 'react';
import WaterModal from "../WaterModal/WaterModal";

const WrapperWaterModal = () => {
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<WaterModal onClose={closeModal} operationType={"edit"}/>);
  }, [setModal, closeModal]);


  return (
    <div>
      <h2>Water Consumption</h2>
      <p>Track and manage your daily water intake</p>

      <button type="button" onClick={openModal}>
        Add Water Entry
      </button>
    </div>
  );
};

export default WrapperWaterModal