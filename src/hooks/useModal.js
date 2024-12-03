import { useState } from 'react';

export const useModal = () => {
  const [modalContent, setModalContent] = useState(null);

  const setModal = content => {
    setModalContent(content); // Відкриваємо модальне вікно
  };

  const closeModal = () => {
    setModalContent(null); // Закриваємо модальне вікно
  };

  return { setModal, closeModal, modalContent };
};
