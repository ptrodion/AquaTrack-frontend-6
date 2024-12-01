import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';
import UserBar from 'components/UserBar/UserBar';

const UserPanel = () => {
  const { t } = useTranslation();
  return (
    <div className={css.welcome}>
      {t('userPanel.greeting')}
      <span className={css.userName}>, User</span>
      <UserBar
        name=""
      />
    </div>
  );
};

export default UserPanel;
