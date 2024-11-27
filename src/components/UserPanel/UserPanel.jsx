import { t } from 'i18next';
import css from './UserPanel.module.css';

const UserPanel = () => {
  return (
    <div className={css.welcome}>
      {t('userPanel.greeting')}
      <span className={css.userName}>, Nadia</span>
    </div>
  );
};

export default UserPanel;
