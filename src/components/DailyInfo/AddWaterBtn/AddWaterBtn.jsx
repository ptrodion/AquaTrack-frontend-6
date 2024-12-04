import css from './AddWaterBtn.module.css';
import { useTranslation } from 'react-i18next';

const AddWaterButton = ({ addItem }) => {
  const { t } = useTranslation();
  return (
    <div className={css.addWaterContainer}>
      <button className={css.addBtn} onClick={addItem}>
        +
      </button>
      <span className={css.addWaterText}>{t('waterModal.add')}</span>
    </div>
  );
};

export default AddWaterButton;
