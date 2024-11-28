import UserBar from 'components/UserBar/UserBar.jsx';
import css from './UserPanel.module.css';
import { useTranslation } from 'react-i18next';

const UserPanel = () => {
  const { t } = useTranslation();
  return (
    <div className={css.welcome}>
      {t('userPanel.greeting')}
      <span className={css.userName}>, Nadia</span>
      <UserBar name="Nadia" avatarUrl="https://example.com/avatar.jpg" />
    </div>
  );
};

export default UserPanel;
