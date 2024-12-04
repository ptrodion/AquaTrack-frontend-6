import { useState } from 'react';
import { SlPencil, SlTrash } from 'react-icons/sl';
import css from './WaterList.module.css';
import { useTranslation } from 'react-i18next';
import ModalDeleteEntry from './ModalDeleteEntry.jsx';
import WaterModal from '../WaterModal/WaterModal.jsx';

const WaterList = () => {
  const { t } = useTranslation();
  const [waterItems, setWaterItems] = useState([
    { id: 1, amount: 250, time: '7:00 AM' },
    { id: 2, amount: 250, time: '11:00 AM' },
    { id: 3, amount: 250, time: '2:00 PM' },
    { id: 4, amount: 300, time: '4:00 PM' },
    { id: 5, amount: 200, time: '6:00 PM' },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Відкрити модальне вікно видалення
  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  // Відкрити модальне вікно редагування
  const openEditModal = (id) => {
    setSelectedId(id);
    setIsEditModalOpen(true);
  };

  // Закрити модальне вікно
  const closeModal = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedId(null);
  };

  // Видалити елемент після підтвердження
  const confirmDelete = (id) => {
    setWaterItems(waterItems.filter(item => item.id !== id));
    closeModal();
  };

  // Оновити елемент після редагування
  const handleEdit = (updatedItem) => {
    setWaterItems(
      waterItems.map(item => 
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    closeModal();
  };

  return (
    <div className={css.waterListContainer}>
      <div className={css.waterList}>
        {waterItems.map(item => (
          <div key={item.id} className={css.waterItem}>
            <svg width="64" height="64" className={css.waterIcon}>
              <use href="#icon-water-glass" />
            </svg>
            <div className={css.waterDetails}>
              <p className={css.waterAmount}>{item.amount} ml</p>
              <p className={css.waterTime}>{item.time}</p>
            </div>
            <div className={css.waterActions}>
              <button
                className={css.editBtn}
                onClick={() => openEditModal(item.id)}
                aria-label={t('chooseDate.edit')}
              >
                <SlPencil />
              </button>
              <button
                className={css.deleteBtn}
                onClick={() => openDeleteModal(item.id)}
                aria-label={t('chooseDate.delete')}
              >
                <SlTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isDeleteModalOpen && (
        <ModalDeleteEntry
          id={selectedId}
          onClose={closeModal}
          onDelete={confirmDelete}
        />
      )}

      {isEditModalOpen && (
        <WaterModal
          operationType="edit"
          onClose={closeModal}
          water={waterItems.find(item => item.id === selectedId)}
        />
      )}
    </div>
  );
};

export default WaterList;
