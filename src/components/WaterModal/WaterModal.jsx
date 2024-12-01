import React from "react";
import WaterForm from '../WaterForm/WaterForm';
import ModalWindow from "../ModalWindow/ModalWindow";
import styles from '../WaterModal/WaterModal.module.css';

const WaterModal = ({
    type,
    initialData,
    isOpen,
    closeModal,
    id,
    isLoading,
    setIsLoading,
}) => {
    const title =
        type === 'add' ? 'Add Water' : `Edit the entered amount <br /> of water`;
    const subtitle = type === 'add' ? 'Choose a value' : 'Correct entered data:';

    return (
        <ModalWindow modalIsOpen={isOpen} onCloseModal={closeModal}>
            <div className={styles.WaterModalContainer}>
                <div className={styles.WaterModalHeader}>
                    <h2
                        className={styles.WaterModalTitle}
                        dangerouslySetInnerHTML={{ _html: title }}
                    ></h2>
                    <h3 className={styles.WaterModalSubtitle}>{subtitle}</h3>
                </div>
                <WaterForm
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    type={type}
                    initialData={initialData}
                    closeModal={closeModal}
                    id={id}
                />
            </div>
        </ModalWindow>
    );
};

export default WaterModal;