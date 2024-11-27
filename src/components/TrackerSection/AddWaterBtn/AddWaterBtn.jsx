import { t } from 'i18next';
import css from './AddWaterBtn.module.css';

const AddWaterBtn = () => {
  return (
    <button className={css.addWaterBtn} type="button">
      + {t('waterModal.add')}
    </button>
  );
};

export default AddWaterBtn;
