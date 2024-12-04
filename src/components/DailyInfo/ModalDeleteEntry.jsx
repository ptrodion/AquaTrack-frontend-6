import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import svg from '../../assets/icons/sprite.svg';
import css from './ModalDeleteEntry.module.css';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import clsx from 'clsx';
import s from '../ModalBackdrop/ModalBackdrop.module.css';

const ModalDeleteEntry = ({ id, onClose, onDelete }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(true);

  // Динамічний стиль для backdrop
  const dynamicStyle = clsx(s.backdrop, active && s.active);

  // Обробка видалення
  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      onDelete(id);
      setIsLoading(false);
    }, 1000); // Імітація затримки для демонстрації завантаження
  };

  // Закриття модального вікна
  const handleCloseModal = useCallback(
    (e) => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
        setActive(false);
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
      document.body.removeAttribute('style');
    };
  }, [handleCloseModal]);

  return (
    <div className={dynamicStyle} onClick={handleCloseModal}>
      <div className={css.modal}>
        <button
          type="button"
          aria-label={t('deleteModal.ariaClose')}
          onClick={onClose}
          className={css.closeBtn}
        >
          <svg className={css.svg}>
            <use xlinkHref={svg + '#icon-x'}></use>
          </svg>
        </button>

        <div className={css.modalTextBox}>
          <h2 className={css.modalTitle}>{t('deleteModal.title')}</h2>
          <p className={css.modalText}>{t('deleteModal.confirm')}</p>
        </div>

        <div className={css.modalBtnBox}>
          {isLoading ? (
            <LoaderComponent height={80} width={80} />
          ) : (
            <>
              <button onClick={handleDelete} className={css.btnDelete}>
                {t('deleteModal.delete')}
              </button>
              <button type="button" onClick={onClose} className={css.btnCancel}>
                {t('deleteModal.close')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteEntry;
