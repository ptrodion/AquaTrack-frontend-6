import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';
import UserBar from 'components/UserBar/UserBar';

const UserPanel = () => {
  const { t } = useTranslation();
  return (
    <div className={css.welcome}>
      {t('userPanel.greeting')}
      <span className={css.userName}>, Nadia</span>
      <UserBar
        name="Nadia"
      />
    </div>
  );
};

export default UserPanel;
